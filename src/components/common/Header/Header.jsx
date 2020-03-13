import React from 'react';

//library
import {NavLink} from 'react-router-dom';

//styles
import styles from './Header.module.scss';
import logo from "../../../assets/image/logo.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"/>
            <menu className={styles.menu}>
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName={styles.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/prysm' activeClassName={styles.active}>Prysm</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact_us' activeClassName={styles.active}>Contact Us</NavLink>
                    </li>
                </ul>
            </menu>
        </header>
    );
};