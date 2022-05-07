import "../styles/typography.scss"
import "../styles/globals.scss"
import Container from "../components/Container"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Header />

            <Component {...pageProps} />
        </Container>
    )
}

export default MyApp
