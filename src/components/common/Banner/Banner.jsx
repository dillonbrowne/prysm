// core
import React from 'react';

// styles
import styles from './Banner.module.scss';

export const Banner = ({logo = false, image, text}) => {
    return (<div className={styles.banner}>
        <section className={styles.banner}>
            <img src={image} alt='banner'/>
            {logo && <img src={logo} alt="logo" className={styles.logo}/>}
            <h1>{text}</h1>
        </section>
    </div>);
};