// core
import React, {useState, useEffect} from 'react';

// components
import {Banner, Button, HowItWorks} from "../../common";
import {HomeTabs, HomeAccordion, SlickSlider} from "./components";
import Img from "react-image"
// styles
import styles from './Home.module.scss';
import banner from "../../../assets/image/home/banner-home.jpg";
import logo from '../../../assets/image/logo.svg'
import logoBlack from '../../../assets/image/logo-black.svg'
import halfMonitor from '../../../assets/image/home/halfMonitor.svg'
import monitor from '../../../assets/image/home/monitor.svg'


import cetrix from '../../../assets/image/partners/cetrix.svg'
import geopointe from '../../../assets/image/partners/geopointe.svg'
import telkdesk from '../../../assets/image/partners/telkdesk.svg'
import we from '../../../assets/image/partners/we.svg'
import windfall from '../../../assets/image/partners/windfall.svg'

export const Home = ({setModal}) => {
    const isClient = typeof window === 'object';
    const [windowSize, setWindowSize] = useState(getSize);

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    useEffect(() => {
        if (!isClient) return false;

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isClient]); // Empty array ensures that effect is only run on mount and unmount


    return (<div className={styles.home}>
        <Banner logo={logo} image={banner} text='Do more of what matters' windowSize={windowSize}/>
        <section className={`${styles.stay} container`}>
            <div className={styles.stayLeft}>
                <div className={styles.stayLeftInner}>
                    {windowSize.width < 767 && <div className={styles.homeLogo}><Img src={logoBlack} alt="logo"/></div>}
                    <h2>
                        Stay connected to clinicians and  <br />patients through a streamlined process  <br />that increases
                        philanthropy.
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p>
                        Prysm is the first constituent relationship management application developed for non-profit
                        healthcare. Prysm provides philanthropic foundations with a proven, repeatable process to
                        effectively engage clinicians, elevate patient experience and improve philanthropic outcomes.
                    </p>
                    <br />
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
                <Img className={styles.halfMonitor} src={halfMonitor} alt="monitor"/>
                <Img className={styles.monitor} src={monitor} alt="monitor"/>
            </div>
        </section>
        <section className={`${styles.grateful} container`}>
            <h2>Grateful Patient Philanthropy 2.0</h2>
            <br />
            <SlickSlider/>
        </section>
        <section className={styles.why}>
            <div className="container">
                {windowSize.width > 767
                    ? (<>
                        <h3>Why Prysm</h3>
                        <h4>
                            Leverage powerful technology to engage physicians, identify patients and build a sustainable culture of philanthropy.
                        </h4>
                        <HomeTabs/>
                    </>)
                    : <HomeAccordion/>}

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
                <Img src={cetrix} alt="cetrix"/>
                <Img src={geopointe} alt="geopointe"/>
                <Img src={we} alt="we"/>
                <Img src={windfall} alt="windfall"/>
                <Img src={telkdesk} alt="telkdesk"/>
            </div>
        </section>
        <hr/>
        <HowItWorks setModal={setModal}/>
    </div>);
};
