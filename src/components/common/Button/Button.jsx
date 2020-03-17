// core
import React from 'react';

// library
import {Link} from "react-router-dom";

// styles
import styles from './Button.module.scss';
import {routes} from "../../App/routes";

let route;
export const Button = ({text, setModal}) => {
    if (text === 'see how it works') {
        route = routes.prysm;
    } else if (text === 'request a demo') {
        route = '#modal';
    }
    const openModal = (e) => {
        if (e.target.name === 'request a demo') setModal(true);
    };

    return (
        <Link to={route}>
            <button name={text} type='button' className={styles.button} onClick={(e) => openModal(e)}>{text}</button>
        </Link>
    );
};
