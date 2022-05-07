import Head from "../components/Head"
import TodoItem from "../components/TodoItem"
import Button from "../components/Buttons"
import InputSection from "../components/InputSection"

import styles from "../styles/Home.module.scss"

import { useState, useContext } from "react"

import InputSectionContext from "../context/inputSectionContext"

export default function Index() {
    const { todoItems, todoItemsDone } = useContext(InputSectionContext)

    const [isShow, setShow] = useState(false)

    const toggleForm = () => {
        setShow(!isShow)
    }

    return (
        <div className={styles.todo__home}>
            <Head title="Home" />

            {isShow ? <InputSection toggleForm={toggleForm} /> : ""}

            <div className={styles.todo__items}>
                <h3 className="text__danger">
                    {todoItems.length > 0
                        ? `You have ${todoItems.length} activity to do 😎`
                        : `You have nothing todo 🥲`}
                </h3>
                <br />

                {todoItems
                    .map(
                        ({
                            title,
                            time,
                            date,
                            note,
                            dateCreated,
                            dateFinished,
                            id,
                            isDone,
                        }) => (
                            <TodoItem
                                title={title}
                                time={time}
                                date={date}
                                note={note}
                                key={id}
                                id={id}
                                isDone={isDone}
                                dateCreated={dateCreated}
                                dateFinished={dateFinished}
                            />
                        )
                    )
                    .reverse()}

                <hr />
                <br />

                <h3 className="text__danger">
                    {todoItemsDone.length > 0
                        ? `Amazing, you've finished ${todoItemsDone.length} activity 🥰`
                        : `You haven't finish any activity 😴`}
                </h3>
                <br />

                {todoItemsDone.map(
                    ({
                        title,
                        time,
                        date,
                        note,
                        dateCreated,
                        dateFinished,
                        id,
                        isDone,
                    }) => (
                        <TodoItem
                            title={title}
                            time={time}
                            date={date}
                            note={note}
                            key={id}
                            id={id}
                            isDone={isDone}
                            dateCreated={dateCreated}
                            dateFinished={dateFinished}
                        />
                    )
                )}
            </div>

            <Button
                onClick={toggleForm}
                style={{
                    minWidth: "0",
                    minHeight: "0",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    position: "fixed",
                    top: "90%",
                    right: "5%",
                }}
            >
                <svg
                    width="30"
                    fill="aliceblue"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                </svg>
            </Button>
        </div>
    )
}
