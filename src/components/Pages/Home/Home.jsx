// core
import React from 'react';

// components
import {Button} from "../../common";
import {HomeTabs} from "./HomeTabs/HomeTabs";

// styles
import styles from './Home.module.scss';
import banner from '../../../assets/image/home/banner-home.png'
import logo from '../../../assets/image/logo.svg'
import monitor from '../../../assets/image/home/monitor.svg'
import message from '../../../assets/image/home/message.svg'
import diagram from '../../../assets/image/home/diagram.svg'
import people from '../../../assets/image/home/people.svg'

import cetrix from '../../../assets/image/home/partners/cetrix.svg'
import geopointe from '../../../assets/image/home/partners/geopointe.svg'
import telkdesk from '../../../assets/image/home/partners/telkdesk.svg'
import we from '../../../assets/image/home/partners/we.svg'
import windfall from '../../../assets/image/home/partners/windfall.svg'


export const Home = () => {
    return (<div className={styles.home}>
        <section className={styles.banner}>
            <img src={banner} alt='banner'/>
            <img src={logo} alt="logo" className={styles.logo}/>
            <h1>Do more of what matters</h1>
        </section>

        <section className={styles.stay}>
            <div className={styles.stayLeft}>
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
                    fundraising strategy becomes more intentional and your donor management system is able to perform as
                    intended.
                </p>
                <div className={styles.stayButton}>
                    <Button text='see how it works'/>
                </div>
            </div>
            <div className={styles.stayRight}>
                <img className={styles.monitor} src={monitor} alt="monitor"/>
            </div>
        </section>

        <section className={styles.grateful}>
            <h3>Grateful Patient Philanthropy 2.0</h3>
            <ul>
                <li>
                    <img src={message} alt=""/>
                    <p>
                        Strengthen stakeholder relationships with a science based approach that measures contact
                        attempts, answered phone calls and detailed discovery information.
                    </p>
                </li>
                <li>
                    <img src={diagram} alt=""/>
                    <p>
                        An intuitive, repeatable process designed by fundraisers allows users to move hundreds of
                        patients through the identification – qualification process with minimal friction.
                    </p>
                </li>
                <li>
                    <img src={people} alt=""/>
                    <p>
                        Understand which clinicians and departments represent the best fundraising opportunities, based
                        on encounter analysis and granular metrics tracking.
                    </p>
                </li>
            </ul>
        </section>

        <section className={styles.why}>
            <h3>Why Prysm</h3>
            <h4>
                Increased qualification activity = increased philanthropic revenue.
                It’s that simple.
            </h4>
            <HomeTabs/>
        </section>
        <section className={styles.technology}>
            <h3>Prysm’s Technology Partner Ecosystem</h3>
            <h4>
                Leverage multiple cost effective HIPAA compliant integrations to drive exponential increases across all
                areas of your fundraising enterprise.
            </h4>
        </section>
        <section className={styles.partners}>

            <div className={styles.partnersInner}>
                <img src={cetrix} alt="cetrix"/>
                <img src={geopointe} alt="geopointe"/>
                <img src={telkdesk} alt="telkdesk"/>
                <img src={we} alt="we"/>
                <img src={windfall} alt="windfall"/>
            </div>
        </section>
        <section className={styles.how}>
            <h3>Discover how Prysm can work for you.</h3>
            <div className={styles.howButtons}>
                <Button text='see how it works'/>
                <Button text='request a demo'/>
            </div>
        </section>
        <hr/>
    </div>);
};