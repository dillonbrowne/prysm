// core
import React from 'react';

// components
import {Button} from "..";

// styles
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
    return (
        <section className={styles.how}>
            <h3>Discover how Prysm can work for you.</h3>
            <div className={styles.howButtons}>
                <Button text='see how it works'/>
                <Button text='request a demo'/>
            </div>
        </section>
    );
};