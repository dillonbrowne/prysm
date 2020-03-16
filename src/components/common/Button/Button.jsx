// core
import React from 'react';

// library
import {Link} from "react-router-dom";

// styles
import styles from './Button.module.scss';
import {routes} from "../../App/routes";

export const Button = ({text}) => {
    const route = text === 'see how it works' ? routes.prysm : 'modal';

    return (
        <Link to={route}>
            <button type='button' className={styles.button}>{text}</button>
        </Link>
    );
};
