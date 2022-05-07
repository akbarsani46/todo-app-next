import { useContext } from "react"

import Button from "./Buttons"
import Input from "./Input"
import TextArea from "./TextArea"

import inputSectionStyle from "../styles/InputSection.module.scss"

import InputSectionContext from "../context/inputSectionContext"

const InputSection = ({ toggleForm }) => {
    const { formValue, todoItemsHandler } = useContext(InputSectionContext)

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className={inputSectionStyle.input__section}
        >
            <h4
                className="text__danger"
                style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Set your plan here{" "}
                <span style={{ fontSize: "1.5rem" }}>😊</span>
            </h4>

            <div className={inputSectionStyle.form__group}>
                <label htmlFor="" className={inputSectionStyle.form__label}>
                    Title :
                </label>
                <Input name="title" />
            </div>

            <div className={inputSectionStyle.form__group}>
                <label htmlFor="" className={inputSectionStyle.form__label}>
                    Due Date :
                </label>

                <div className={inputSectionStyle.row}>
                    <Input type="time" name="time" />
                    <Input type="date" name="date" />
                </div>
            </div>

            <div className={inputSectionStyle.form__group}>
                <label htmlFor="" className={inputSectionStyle.form__label}>
                    Note :
                </label>
                <TextArea name="note" />
            </div>

            <div className="button__group">
                <Button
                    type="submit"
                    onClick={todoItemsHandler}
                    onSubmit={todoItemsHandler}
                >
                    Save
                </Button>
                <Button onClick={toggleForm}>Cancel</Button>
            </div>
        </form>
    )
}

export default InputSection
