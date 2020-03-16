// core
import React from 'react';

// styles
import styles from './Banner.module.scss';
import upper from "../../../assets/image/upper-gradient.svg"
import lower from "../../../assets/image/lower-gradient.svg"

export const Banner = ({logo = false, image, text, windowSize = false}) => {
    return (
        <section className={`${styles.banner} container`}>
            <img src={upper} alt="lower" className={styles.upper} />
            {/*<img src={lower} alt="upper" className={styles.lower} />*/}
            <img src={image} alt='banner' className={styles.cover}/>

            {windowSize.width > 767 && logo && <img src={logo} alt="logo" className={styles.logo}/>}
            <h1>{text}</h1>

        </section>
    )
};
