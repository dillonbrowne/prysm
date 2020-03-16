// core
import React from 'react';

// styles
import styles from './Banner.module.scss';
import upper from "../../../assets/image/upper-gradient.svg"
import lower from "../../../assets/image/lower-gradient.svg"

export const Banner = ({logo = false, image, text, windowSize = false}) => {
    return (
        <section className={`${styles.banner} container`}>
            <img src={upper} alt="upper" className={styles.upper} />
            <img src={image} alt='banner' className={styles.cover}/>
            <img src={lower} alt="lower" className={styles.lower} />
            {windowSize.width > 767 && logo && <img src={logo} alt="logo" className={styles.logo}/>}
            <h1>{text}</h1>
        </section>
    )
};
