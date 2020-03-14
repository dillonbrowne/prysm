// core
import React from 'react';

// components
import {Banner, Button, SlickSlider, HowItWorks} from "../../common";
import {HomeTabs} from "./HomeTabs/HomeTabs";
import {HomeAccordion} from "./HomeAccordion/HomeAccordion";

// styles
import styles from './Home.module.scss';
import banner from "../../../assets/image/home/banner-home.png";
import logo from '../../../assets/image/logo.svg'
import halfMonitor from '../../../assets/image/home/halfMonitor.svg'
import monitor from '../../../assets/image/home/monitor.svg'


import cetrix from '../../../assets/image/home/partners/cetrix.svg'
import geopointe from '../../../assets/image/home/partners/geopointe.svg'
import telkdesk from '../../../assets/image/home/partners/telkdesk.svg'
import we from '../../../assets/image/home/partners/we.svg'
import windfall from '../../../assets/image/home/partners/windfall.svg'

export const Home = () => {
    return (<div className={styles.home}>
        <Banner logo={logo} image={banner} text='Do more of what matters'/>
        <section className={styles.stay}>
            <div className={styles.stayLeft}>
                <div className={styles.stayLeftInner}>
                    <h3>
                        Stay connected to clinicians and patients through a streamlined process that increases
                        philanthropy.
                    </h3>
                    <p>
                        Prysm is the first constituent relationship management application developed for non-profit
                        healthcare. Prysm provides philanthropic foundations with a proven, repeatable process to
                        effectively engage clinicians, elevate patient experience and improve philanthropic outcomes.
                    </p>
                    <p>
                        By introducing an advanced lead generation component to your grateful patient program, your
                        fundraising strategy becomes more intentional and your donor management system is able to
                        perform as
                        intended.
                    </p>
                </div>
                <div className={styles.stayButton}>
                    <Button text='see how it works'/>
                </div>
            </div>
            <div className={styles.stayRight}>
                <img className={styles.halfMonitor} src={halfMonitor} alt="monitor"/>
                <img className={styles.monitor} src={monitor} alt="monitor"/>
            </div>
        </section>
        <section className={`${styles.grateful} container`}>
            <h3>Grateful Patient Philanthropy 2.0</h3>
            <SlickSlider/>
        </section>
        <section className={styles.why}>
            <div className="container">
                {window.innerWidth > 786 ? <HomeTabs/> : <HomeAccordion/>}

            </div>
        </section>
        <section className={styles.technology}>
            <div className="container">
                <h3>Prysm’s Technology Partner Ecosystem</h3>
                <h4>
                    Leverage multiple cost effective HIPAA compliant integrations to drive exponential increases across
                    all
                    areas of your fundraising enterprise.
                </h4>
            </div>
        </section>
        <section className={styles.partners}>
            <div className={styles.partnersInner}>
                <img src={cetrix} alt="cetrix"/>
                <img src={geopointe} alt="geopointe"/>
                <img src={we} alt="we"/>
                <img src={windfall} alt="windfall"/>
                <img src={telkdesk} alt="telkdesk"/>
            </div>
        </section>
        <hr/>
        <HowItWorks/>
    </div>);
};