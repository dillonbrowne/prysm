import React from 'react';

//library
import {NavLink} from 'react-router-dom';

//styles
import styles from './Header.module.scss';
import logo from "../../../assets/image/home/headerLogo.svg";
import linkedin from "../../../assets/image/home/linkedin.svg";

export const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <div className={styles.headerInner}>
                <img className={styles.logo} src={logo} alt="logo"/>
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
                <a href="/" className={styles.linkedin}><img src={linkedin} alt="linkedin"/></a>
            </div>
        </header>
    );
};