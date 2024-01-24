import{ NavLink} from "react-router-dom";
import style from '../componensta/Navbar.module.scss'

export function Navbar() {
    return (
        <>
            <nav className={style.navbar}>
                <NavLink  to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </nav>

        </>
    )
}