import Link from 'next/link'
import styles from "./header.module.css";


const { header, navbar, navLinks, logo, navLink, rightSide, btn } = styles;
const Header = () => {
    return (
        <header className={header}>
            <nav className={navbar}>
                {/* Logo  */}
                <Link href={"/"} className={logo}>WEGO ZAIN</Link>
                {/* Links  */}
                <div className={navLinks}>
                    <Link className={navLink} href={"/articales"}>Articales</Link>
                    <Link className={navLink} href={"/about"}>About</Link>
                    <Link className={navLink} href={"/admin"}>Admin</Link>
                </div>
                <div className={rightSide}>
                    <Link className={btn} href={"/login"}>Login</Link>
                    <Link className={btn} href={"/register"}>Register</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
