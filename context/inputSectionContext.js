import { useState, createContext, useEffect } from "react"

const InputSectionContext = createContext()

const getTodoItemsFromLocal = () => {
    const storedTodo = localStorage.getItem("todoItems")
    const storedTodoDone = localStorage.getItem("todoItemsDone")

    if (storedTodo === null || storedTodo === undefined) {
        localStorage.setItem("todoItems", JSON.stringify([]))
    }

    if (storedTodoDone === null || storedTodo === undefined) {
        localStorage.setItem("todoItemsDone", JSON.stringify([]))
    }

    return {
        todoItems: JSON.parse(storedTodo),
        todoItemsDone: JSON.parse(storedTodoDone),
    }
}

export const InputSectionProvider = ({ children }) => {
    const [formValue, setFormValue] = useState({})

    const [todoItems, setTodoItems] = useState([])

    const [todoItemsDone, setTodoItemsDone] = useState([])

    const formValueHandler = (e) => {
        const inputValue = {}
        inputValue[e.target.name] = e.target.value

        setFormValue((prevFormValue) => {
            return {
                ...prevFormValue,
                ...inputValue,
            }
        })
    }

    const todoItemsHandler = () => {
        setTodoItems((prevFormValue) => [
            ...prevFormValue,
            {
                ...formValue,
                id: prevFormValue.length + 1,
                dateCreated: new Date(),
                isDone: false,
                dateFinished: false,
            },
        ])

        setFormValue({})
    }

    useEffect(() => {
        const storedTodo = getTodoItemsFromLocal()

        setTodoItems(storedTodo.todoItems)
        setTodoItemsDone(storedTodo.todoItemsDone)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todoItems", JSON.stringify(todoItems))
        }, 0)
    }, [todoItems])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todoItemsDone", JSON.stringify(todoItemsDone))
        }, 0)
    }, [todoItemsDone])

    return (
        <InputSectionContext.Provider
            value={{
                formValue,
                todoItems,
                todoItemsDone,
                formValueHandler,
                todoItemsHandler,
                setTodoItems,
                setTodoItemsDone,
            }}
        >
            {children}
        </InputSectionContext.Provider>
    )
}

export default InputSectionContext
