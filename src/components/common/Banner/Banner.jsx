// core
import React from 'react';

// styles
import styles from './Banner.module.scss';

export const Banner = ({logo = false, image, text}) => {
    return (
        <section className={`${styles.banner} container`}>
            <img src={image} alt='banner'/>
            {logo && <img src={logo} alt="logo" className={styles.logo}/>}
            <h1>{text}</h1>
        </section>
    )
};