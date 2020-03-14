// core
import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

// styles
import './PrysmTabs.scss';
import step1 from '../../../../../assets/image/prysm/step-1.svg'
import step2 from '../../../../../assets/image/prysm/step-2.svg'
import step3 from '../../../../../assets/image/prysm/step-3.svg'
import step4 from '../../../../../assets/image/prysm/step-4_1.svg'
import step5 from '../../../../../assets/image/prysm/step-5.svg'

export const PrysmTabs = () => {
    return (
        <Tabs className='prysmTabs container'>
            <TabList className='prysmTabList'>
                <Tab>
                    Step 1
                    <div>Generate patient list</div>
                </Tab>
                <Tab> Step 2
                    <div>Review with clinicians</div>
                </Tab>
                <Tab> Step 3
                    <div>Contact patients</div>
                </Tab>
                <Tab> Step 4
                    <div>Report outcomes</div>
                </Tab>
                <Tab> Step 5
                    <div>Optimize strategy</div>
                </Tab>
            </TabList>
            <TabPanel className="tabPanel">
                <h3>
                    When clinicians are engaged in a process with analytically sound information and consistent follow
                    up reporting, they are highly willing to partner with development.
                </h3>
                <img src={step1} alt="step1"/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <h3>
                    When clinicians are engaged in a process with analytically sound information and consistent follow
                    up reporting, they are highly willing to partner with development.
                </h3>
                <img src={step2} alt="step2"/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <h3>
                    Intuitive in-platform phone call and email tracking enables fundraisers to efficiently record
                    discovery activity.
                </h3>
                <img src={step3} alt="step3"/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <h3>
                    Intuitive single click reporting enables fundraisers to view clinicians’ patients using a scoring
                    model that combines affinity and capacity.
                </h3>
                <img src={step4} alt="step4"/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <h3>
                    Easily track and record outcomes of discovery activity to optimize program strategy.
                </h3>
                <img src={step5} alt="step5"/>
            </TabPanel>

        </Tabs>
    );
};