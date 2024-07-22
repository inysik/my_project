// import React from 'react';
import cls from  './Navigation.module.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbarNav}>
                <li className={cls.navItem}>
                    <CustomLink to="/" className={cls.navLink}>Главная</CustomLink>
                </li>
                <li className={cls.navItem}>
                    <CustomLink to="/plansProgram" className={cls.navLink}>План программ</CustomLink>
                </li>
                <li className={cls.navItem}>
                    <CustomLink to="/registration" className={cls.navLink}>Регистрация</CustomLink>
                </li>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}
