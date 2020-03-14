// core
import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'


// components
import {Button} from "../../../../common";
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


// styles
import './HomeTabs.scss';

export const HomeTabs = () => {
    return (
        <Tabs className='homeTabs'>
            <TabList className='homeTabList'>
                <Tab>Frontline Fundraisers</Tab>
                <Tab>Development Executives</Tab>
                <Tab>Prospect Management</Tab>
                <Tab>IT and Database Management</Tab>
                <Tab>Discovery Visit Scheduling</Tab>
                <Tab>Annual Giving</Tab>
                <Tab>Patient Experience</Tab>
                <Tab>PVIP Concierge </Tab>
            </TabList>

            <TabPanel className="tabPanel">
                <h5>Major Giving</h5>
                <p>
                    Prysm removes friction from fundraising workflows by delivering on-demand information and a
                    streamlined process for clinician engagement and patient outreach. This leads to an exponential
                    increase in discovery visits with patients.
                </p>
                <Button text='see how it works'/>
                <img src={fundraisers} alt=""/>
            </TabPanel>
            <TabPanel className="tabPanel second">
                <p>By insourcing a quantifiable process for patient outreach and grateful patient identification, your
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
                <Button text='see how it works'/>
                <h4>Focus on the metrics that matter.</h4>
                <img src={development} alt="development"/>
            </TabPanel>
            <TabPanel className="tabPanel third">
                <h5>Prospect Management</h5>
                <p>
                    Prysm provides prospect managers with a suite of tools to identify grateful patient opportunities.
                    Integrated workflows enable prospect managers to collaborate seamlessly with frontline fundraisers.
                </p>
                <p>
                    Embedded encounter analysis and native integration with our wealth screening and machine learning
                    partners transforms prospect management’s role in grateful patient philanthropy.
                </p>
                <Button text='see how it works'/>
                <img src={management} alt="management"/>
            </TabPanel>
            <TabPanel className="tabPanel four">
                <p>Prysm integrates with your health system’s EMR and Donor Management System.</p>
                <p>
                    By introducing an advanced HIPAA compliant component to your grateful patient program, your donor
                    management system is able to perform as intended and your fundraising strategy becomes more
                    flexible. Manage your PHI and related applications in one secure system.
                </p>
                <Button text='see how it works'/>
                <ul className='databaseList'>
                    <li>
                        <img src={security} alt="security"/>
                        <div className='databaseDescription'>
                            <h5>Security</h5>
                            <span>HIPAA compliant</span>
                            <span>single sign on (SS0)</span>
                        </div>
                    </li>
                    <li>
                        <img src={integration} alt="integration"/>
                        <div className='databaseDescription'>
                            <h5>Integrate</h5>
                            <span>100’s of available API’s</span>
                            <span>Declutter your donor management system</span>
                        </div>
                    </li>
                    <li>
                        <img src={clock} alt="clock"/>
                        <div className='databaseDescription'>
                            <h5>Save Time</h5>
                            <span>ime saving automation</span>
                            <span>Drag and drop reporting</span>
                        </div>
                    </li>
                    <li>
                        <img src={analyze} alt="analyze"/>
                        <div className='databaseDescription'>
                            <h5>Analyze and Inform</h5>
                            <span>Comprehensive activity and historical reporting</span>
                            <span>Benchmarking analysis</span>
                        </div>
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="tabPanel five">
                <p>
                    Increase activity and number of patient discovery visits using in-platform calling lists and queues
                    through Prysm’s native integration with TalkDesk. Automate activity tracking, recording and
                    reporting to contact more patients with less effort.
                </p>
                <Button text='see how it works'/>
                <img src={discovery} alt="discovery"/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <p>
                    Hyper segmented affinity and capacity modeling enables organizations to develop personalized
                    communications to patients based on individual affinity to specific departments and clinicians.
                </p>
                <Button text='see how it works'/>
                <img src={annual} alt="annual"/>
            </TabPanel>
            <TabPanel className="tabPanel">?</TabPanel>
            <TabPanel className="tabPanel">
                <p>
                    Integrate your major gift fundraising strategy with your vip/concierge services for frictionless
                    communication that drives fundraising performance. Ensure your team stays in the know about patients
                    with the greatest affinity for your organization.
                </p>
                <p>
                    Choreograph service excellence across your health system.
                </p>
                <div className="">
                    <Button text='see how it works'/>
                </div>
                <img src={vip} alt="vip" className='vip'/>
            </TabPanel>
        </Tabs>
    );
};