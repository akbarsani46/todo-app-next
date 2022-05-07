import HeadNext from "next/head"

const Head = ({ title }) => {
    return (
        <HeadNext>
            <title>{title}</title>
        </HeadNext>
    )
}

export default Head
