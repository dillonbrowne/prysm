// core
import React from 'react';
import {Accordion, AccordionItem, AccordionItemPanel} from 'react-accessible-accordion';
import Img from "react-image"

// components
import {HomeAccordionItemHeading} from "./HomeAccordionItemHeading/HomeAccordionItemHeading";

// styles
import './HomeAccordion.scss';
import fundraisers from '../../../../../assets/image/home/whyPrysm/fundraisers.svg'
import development from '../../../../../assets/image/home/whyPrysm/development.svg'
import management from '../../../../../assets/image/home/whyPrysm/management.svg'
import discovery from '../../../../../assets/image/home/whyPrysm/discovery.svg'
import annual from '../../../../../assets/image/home/whyPrysm/annual.svg'
import vip from '../../../../../assets/image/home/whyPrysm/vip.png'

import security from '../../../../../assets/image/home/whyPrysm/security.svg'
import integration from '../../../../../assets/image/home/whyPrysm/integration.svg'
import clock from '../../../../../assets/image/home/whyPrysm/clock.svg'
import analyze from '../../../../../assets/image/home/whyPrysm/analyze.svg'


export const HomeAccordion = () => {
    return (
        <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            className='homeAccordion'>
            <AccordionItem>
                <HomeAccordionItemHeading title='Frontline Fundraisers'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <h5>Major Giving</h5>
                    <p>
                        Prysm removes friction from fundraising workflows by delivering on-demand information and a
                        streamlined process for clinician engagement and patient outreach. This leads to an exponential
                        increase in discovery visits with patients.
                    </p>
                    <Img src={fundraisers} alt=""/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='Development Executives'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <p>By insourcing a quantifiable process for patient outreach and grateful patient identification,
                        your
                        501(c3) will establish an internal knowledgebase about the unique characteristics that drive
                        grateful patient philanthropy in your health system.
                    </p>
                    <ul>
                        <li>
                            Enable your fundraisers to be more productive with an intuitive
                            patient outreach application that’s easy to use.
                        </li>
                        <li>
                            Engage stakeholders in dynamic, evidence based conversations about patient philanthropy.
                        </li>
                    </ul>
                    <h4>Focus on the metrics that matter.</h4>
                    <Img src={development} alt="development"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='Prospect Management'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <h5>Prospect Management</h5>
                    <p>
                        Prysm provides prospect managers with a suite of tools to identify grateful patient
                        opportunities.
                        Integrated workflows enable prospect managers to collaborate seamlessly with frontline
                        fundraisers.
                    </p>
                    <p>
                        Embedded encounter analysis and native integration with our wealth screening and machine
                        learning
                        partners transforms prospect management’s role in grateful patient philanthropy.
                    </p>
                    <Img src={management} alt="management"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='IT and Database Management'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <p>Prysm integrates with your health system’s EMR and Donor Management System.</p>
                    <p>
                        By introducing an advanced HIPAA compliant component to your grateful patient program, your
                        donor
                        management system is able to perform as intended and your fundraising strategy becomes more
                        flexible. Manage your PHI and related applications in one secure system.
                    </p>
                    <ul className='databaseList'>
                        <li>
                            <Img src={security} alt="security"/>
                            <div className='databaseDescription'>
                                <h5>Security</h5>
                                <span>HIPAA compliant</span>
                                <span>single sign on (SS0)</span>
                            </div>
                        </li>
                        <li>
                            <Img src={integration} alt="integration"/>
                            <div className='databaseDescription'>
                                <h5>Security</h5>
                                <span>HIPAA compliant</span>
                                <span>single sign on (SS0)</span>
                            </div>
                        </li>
                        <li>
                            <Img src={clock} alt="clock"/>
                            <div className='databaseDescription'>
                                <h5>Security</h5>
                                <span>HIPAA compliant</span>
                                <span>single sign on (SS0)</span>
                            </div>
                        </li>
                        <li>
                            <Img src={analyze} alt="analyze"/>
                            <div className='databaseDescription'>
                                <h5>Security</h5>
                                <span>HIPAA compliant</span>
                                <span>single sign on (SS0)</span>
                            </div>
                        </li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='Discovery Visit Scheduling'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <p>
                        Increase activity and number of patient discovery visits using in-platform calling lists and
                        queues
                        through Prysm’s native integration with TalkDesk. Automate activity tracking, recording and
                        reporting to contact more patients with less effort.
                    </p>
                    <Img src={discovery} alt="discovery"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='Annual Giving'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <p>
                        Hyper segmented affinity and capacity modeling enables organizations to develop personalized
                        communications to patients based on individual affinity to specific departments and clinicians.
                    </p>
                    <Img src={annual} alt="annual"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <HomeAccordionItemHeading title='PVIP Concierge'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>Why Prysm</h3>
                    <h4>
                        Increased qualification activity = increased philanthropic revenue.
                        It’s that simple.
                    </h4>
                    <p>
                        Integrate your major gift fundraising strategy with your vip/concierge services for frictionless
                        communication that drives fundraising performance. Ensure your team stays in the know about
                        patients
                        with the greatest affinity for your organization.
                    </p>
                    <p>
                        Choreograph service excellence across your health system.
                    </p>
                    <Img src={vip} alt="vip" className='vip'/>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};
