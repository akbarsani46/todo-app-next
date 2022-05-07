import { InputSectionProvider } from "../context/inputSectionContext"

const Container = ({ children }) => {
    return (
        <div className="container">
            <InputSectionProvider>{children}</InputSectionProvider>
        </div>
    )
}

export default Container
