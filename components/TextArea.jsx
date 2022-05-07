import textAreaStyle from "../styles/TextArea.module.scss"
import { useContext } from "react"
import InputSectionContext from "../context/inputSectionContext"

const TextArea = (textAreaProps) => {
    const { formValue, formValueHandler } = useContext(InputSectionContext)

    return (
        <textarea
            onChange={formValueHandler}
            className={textAreaStyle.text__area__default}
            value={formValue[textAreaProps.name] || ""}
            {...textAreaProps}
        ></textarea>
    )
}

export default TextArea
