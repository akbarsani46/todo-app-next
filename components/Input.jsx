import { useContext } from "react"
import inputStyle from "../styles/Input.module.scss"
import InputSectionContext from "../context/inputSectionContext"

const Input = (inputProps) => {
    const { formValue, formValueHandler } = useContext(InputSectionContext)

    return (
        <input
            onChange={formValueHandler}
            className={inputStyle.input__todo}
            value={formValue[inputProps.name] || ""}
            {...inputProps}
        ></input>
    )
}

export default Input
