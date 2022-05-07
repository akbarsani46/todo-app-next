import Link from "next/link"

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link href="/">
                        <a className="nav__link">Home</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/About">
                        <a className="nav__link">About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
