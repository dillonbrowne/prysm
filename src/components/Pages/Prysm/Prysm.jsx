// core
import React, {useEffect, useState} from 'react';

// components
import {Banner, HowItWorks} from "../../common";
import {PrysmAccordion, PrysmSlider, PrysmTabs, PrysmAmountSlider} from "./components";


// styles
import styles from './Prysm.module.scss';
import banner from "../../../assets/image/prysm/prysm-banner.webp";
import logo from '../../../assets/image/logo.svg'
import integrations from "../../../assets/image/prysm/integrations.webp";
import arrow from "../../../assets/image/prysm/arrow.svg";
import analyze from "../../../assets/image/prysm/analyze.webp";
import moreTime from "../../../assets/image/prysm/more-time.webp";

import windfall from "../../../assets/image/partners/windfall.svg";
import telkdesk from "../../../assets/image/partners/telkdesk.svg";
import we from "../../../assets/image/partners/we.svg";
import geopointe from "../../../assets/image/partners/geopointe.svg";
import total from "../../../assets/image/prysm/total.webp";

import notebook1 from "../../../assets/image/prysm/notebook-1.webp";
import notebook2 from "../../../assets/image/prysm/notebook-2.webp";
import notebook3 from "../../../assets/image/prysm/notebook-3.webp";
import notebook4 from "../../../assets/image/prysm/notebook-4.webp";

export const Prysm = ({setModal}) => {

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


    return (<div className={styles.prysm}>
        <Banner image={banner} text='How it works' logo={logo}/>
        <div className={`${styles.provide} container`}>
            <h3>
                Prysm provides an enterprise wide process supported by technology to drive clinician engagement and
                grateful
                patxient identification at scale.
            </h3>
            <h4>
                Drive major gift identification with five intuitive, repeatable steps to support sustainable clinician
                engagement.
            </h4>
        </div>
        {windowSize.width > 767
            ? <PrysmTabs/>
            : <PrysmAccordion/>}
        <section className={`${styles.grateful} container`}>
            <h3>Prysm Features</h3>
            <PrysmSlider windowSize={windowSize}/>
        </section>
        <section className={`${styles.integrates} container`}>
            <h3>
                Prysm integrates seamlessly with your health system’s EMR and Donor Management System.
            </h3>
            <img className={styles.integrations} src={integrations} alt="integrations"/>
        </section>
        <section className={`${styles.major} container`}>
            <h3>
                Fuel your major gift pipeline with a dedicated healthcare CRM.
            </h3>
            <div className={styles.majorDescription}>
                <p>
                    Provide your non-profit healthcare organization with a process to supercharge Major, Mid-level and
                    Annual Giving pipeline growth + Patient Experience.
                </p>
                <p>
                    Combining sound information with a sustainable process allows organizations to optimize fundraising
                    strategy.
                </p>
            </div>
        </section>
        <section className={`${styles.results} container`}>
            <h4><span>12 Month Post-Implementation Results</span>
            </h4>
            <ul className={styles.resultsList}>
                <li className={styles.resultsItem}>
                    <img src={arrow} alt="arrow"/>
                    <div className={styles.resultsText}>
                        <div>425%</div>
                        <span>Introductory Phone Calls</span>
                    </div>
                </li>
                <li className={styles.resultsItem}>
                    <img src={arrow} alt="arrow"/>
                    <div className={styles.resultsText}>
                        <div>475%</div>
                        <span>Qualification Meetings</span>
                    </div>
                </li>
                <li className={styles.resultsItem}>
                    <img src={arrow} alt="arrow"/>
                    <div className={styles.resultsText}>
                        <div>1,200%</div>
                        <span> Qualified Patients</span>
                    </div>
                </li>
                <li className={styles.resultsItem}>
                    <img src={arrow} alt="arrow"/>
                    <div className={styles.resultsText}>
                        <div>$1.8M</div>
                        <span>First Time Grateful
                        Patient Donations (FY18)</span>
                    </div>
                </li>
            </ul>
        </section>
        <section className={`${styles.analyze} container`}>
            <img className={styles.analyzemonitor} src={analyze} alt="analyze"/>
            <h3>Analyze program growth and performance in real time to identify opportunities and maximize results.</h3>
        </section>
        <section className={styles.partners}>
            <div className="container">
                <ul className={styles.partnersList}>
                    <li>
                        <img className={styles.partnerImage} src={moreTime} alt="more time"/>
                        <div className={styles.partnersDescription}>
                            <h3>What would you do with more time?</h3>
                            <p>
                                Prysm saves fundraisers’ time by delivering on-demand information and a streamlined
                                process for patient outreach. This leads to an exponential increase in discovery visits
                                with patients.
                            </p>
                            <p>
                                Increased activity = increased philanthropic revenue. It’s really that simple.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img className={styles.partnerImage} src={notebook1} alt="notebook"/>
                        <div className={styles.partnersDescription}>
                            <h3><img src={windfall} alt="windfall"/></h3>
                            <p>
                                Windfall is changing the way that organizations identify, understand, and engage the
                                affluent. Through next generation API technology, Windfall’s data science and machine
                                learning scientists are able to seamlessly collaborate with Prysm clients.
                            </p>
                            <div className={styles.partnerRate}>
                                <div className={styles.partnerRateItem}>
                                    <div>4x</div>
                                    <span>Lead conversion of principal gift prospects.</span>
                                </div>
                                <div className={styles.partnerRateItem}>
                                    <div>9.6%</div>
                                    <span>Increase in grateful patient identification.</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className={styles.partnerImage} src={notebook2} alt="notebook"/>
                        <div className={styles.partnersDescription}>
                            <h3><img src={telkdesk} alt="telkdesk"/></h3>
                            <p>
                                Through an innovation partnership with TalkDesk, Prysm provides a seamless discovery
                                visit scheduling process that drives transformational patient outreach.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img className={styles.partnerImage} src={notebook3} alt="notebook3"/>
                        <div className={styles.partnersDescription}>
                            <h3><img src={we} alt="we"/></h3>
                            <p>
                                By combining WealthEngine’s proven wealth screening technology with real-time patient
                                encounter analysis and integrated AI, Prysm transforms development’s ability to engage
                                clinicians, nurses, and patients.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img className={styles.partnerImage} src={notebook4} alt="notebook"/>
                        <div className={`${styles.partnersDescription} ${styles.direct}`}>
                            <h3><img src={geopointe} alt="geopointe"/></h3>
                            <p>
                                Gain deep insight into your patient population with Geopointe.
                            </p>
                            <p>
                                Redefine your grateful patient program strategy using the latest technology in visual
                                mapping.
                                Ultra segmentation of patients for:
                            </p>
                            <ul className={styles.partnerSubList}>
                                <li>Major Giving</li>
                                <li>Direct Mail</li>
                                <li>Digital Marketing</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className={`${styles.case} container`}>
            <div className={styles.caseDescription}>
                <h3>Case Study: Major Academic Medical Center</h3>
                <p>
                    This academic medical center had no prior history of grateful patient philanthropy, flat wealth
                    screening results, low physician engagement, multiple health system re-brandings and a 100%
                    outpatient population. Whoa! That’s a mouthful.
                </p>
                <p>
                    Leveraging Prysm, 2 talented major gift officers partnered with 2 enthusiastic development
                    associates to transform healthcare philanthropy at their organization. Over a 12 month period,
                    they
                    expanded their major gift pipeline with 41 new qualified major gift prospects and 8 first-time
                    donations totaling $1.8M.
                </p>
            </div>
            <img className={styles.total} src={total} alt="total"/>
        </section>
        <section className={styles.amount}>
            <div className="container">
                <h3>Average $ Amount Raised per Major Gift Officer</h3>
                <div className={styles.amountInner}>
                    <PrysmAmountSlider/>
                </div>
            </div>
        </section>
        <section className='container'>
            <blockquote>
                It’s exciting to finally have a technology that supports a clinician-led referral-based grateful patient
                strategy which two decades of research shows is the core of successful major gift fundraising in
                healthcare. Prysm maintains the integrity of the clinician-patient relationship we have long recognized
                as the primary driver of the gratitude driven referral model. This is the most elegant solution we’ve
                seen to operationalize grateful patient programming and maximize the effectiveness of front line
                fundraisers.
                <span>Ben Golding, Advancement Resources</span>
            </blockquote>
        </section>
        <HowItWorks setModal={setModal}/>
    </div>);
};
