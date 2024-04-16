import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) => clsx(css.navLink, { [css.active]: isActive });
const Navigation = () => {
    return (
        <header>
            <nav className={css.nav}>
                <NavLink to={"/"} className={getNavLinkClassName}>Home</NavLink>
                <NavLink to={"/movies"} className={getNavLinkClassName}>Movies</NavLink>
            </nav>
        </header>
    );
};

export default Navigation;