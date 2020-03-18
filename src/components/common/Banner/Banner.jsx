// core
import React from 'react';
import Img from "react-image"
// styles
import styles from './Banner.module.scss';
import upper from "../../../assets/image/upper-gradient.svg"
import lower from "../../../assets/image/lower-gradient.svg"

export const Banner = ({logo = false, image, text, windowSize = false}) => {
    return (
        <section className={`${styles.banner} container`}>
            <Img src={upper} alt="lower" className={styles.upper} />
            <Img src={lower} alt="upper" className={styles.lower} />
            <Img src={image} alt='banner' className={styles.cover}/>

            {windowSize.width > 767 && logo && <Img src={logo} alt="logo" className={styles.logo}/>}
            <h1>{text}</h1>

        </section>
    )
};
