import React, {useState} from 'react';

//library
import {NavLink, Link} from 'react-router-dom';

//styles
import styles from './Header.module.scss';
import logo from "../../../assets/image/home/headerLogo.svg";
import linkedin from "../../../assets/image/home/linkedin.svg";

export const Header = () => {
    const [active, setActive] = useState(false);
    const addClass = () => {
        setActive(!active);
    };
    return (
        <header className={`${styles.header} container`}>
            <div className={styles.headerInner}>
                <Link to="/home">
                    <img className={styles.logo} src={logo} alt="logo"/>
                </Link>
                 <menu className={`${styles.menu} ${!active ? styles.hide : ''}`}>
                    <ul>
                        <li onClick={() => addClass()}>
                            <NavLink to='/home' activeClassName={styles.active}>Home</NavLink>
                        </li>
                        <li onClick={() => addClass()}>
                            <NavLink to='/prysm' activeClassName={styles.active}>Prysm</NavLink>
                        </li>
                        <li onClick={() => addClass()}>
                            <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
                        </li>
                        <li onClick={() => addClass()}>
                            <NavLink to='/contact_us' activeClassName={styles.active}>Contact Us</NavLink>
                        </li>
                    </ul>
                </menu>

                <button type='button' className={active ? [styles.burgerMenu + ' ' + styles.active] : styles.burgerMenu}
                        onClick={() => addClass()}>
                    <span className={styles.burgerMenuLines}/>
                </button>
                <a href="/" className={styles.linkedin}><img src={linkedin} alt="linkedin"/></a>
            </div>
        </header>
    );
};