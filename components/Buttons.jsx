import buttonStyle from "../styles/Button.module.scss"

const Buttons = (buttonsProps) => {
    return (
        <button className={buttonStyle.button__todo} {...buttonsProps}></button>
    )
}

export default Buttons
