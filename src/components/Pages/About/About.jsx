// core
import React from 'react';

// components
import {Banner, Button, HowItWorks} from "../../common";

// styles
import styles from './About.module.scss';
import banner from "../../../assets/image/about/about-banner.svg";
import haalfTelephone from '../../../assets/image/about/haalfTelephone.webp'
import telephone from '../../../assets/image/about/telephone.jpg'


export const About = ({setModal}) => {
    return (<div className={styles.about}>
        <Banner image={banner} text='Your success is our success.'/>
        <section className={`${styles.stay} container`}>
            <div className={styles.stayLeft}>
                <div className={styles.stayLeftInner}>
                    <h3>
                        Our mission is to advance global healthcare one client at a time.
                    </h3>
                    <p>
                        We are passionate about enabling non-profit healthcare clients to insource process, training and
                        strategy to achieve sustainable long-term results.
                    </p>
                    <p>
                        For the past decade we’ve been working with fundraisers and investing in research and
                        development to create technology that offers a more intuitive experience for frontline
                        fundraisers that work closely with clinicians.
                    </p>
                    <p className='italic'>Efficiency without compromise.</p>
                </div>
                <div className={styles.stayButton}>
                    <Button text='see how it works'/>
                </div>
            </div>
            <div className={styles.stayRight}>
                <img className={styles.halfMonitor} src={haalfTelephone} alt="monitor"/>
                <img className={styles.monitor} src={telephone} alt="monitor"/>
            </div>
        </section>
        <section className={styles.generation}>
            <h3>The Next Generation of Grateful Patient Program Development</h3>
            <div className={styles.generationInner}>
                <p>
                    Combining sound information with a sustainable process allows organizations to optimize fundraising
                    strategy.
                </p>
                <p>
                    Historically clinician engagement, wealth screening and analytics have been strong drivers behind
                    grateful patient program strategy. Each of these tactics are valuable but limited in the absence of
                    a
                    comprehensive, sustainable process.
                </p>
                <p>
                    Over the past decade we discovered a strong trend of organizations being challenged by a lack of
                    systems
                    capable of leveraging the combined benefits of each tool within a measurable, repeatable process
                    that
                    quantifies fundraising ROI. This resulted in fundraisers feeling overwhelmed, clinicians skeptical
                    of
                    development’s role and leadership struggling to manage expectations with health system executives.
                </p>
                <p>
                    To solve this problem, we developed Prysm.
                </p>
            </div>
        </section>
        <HowItWorks setModal={setModal}/>
    </div>);
};