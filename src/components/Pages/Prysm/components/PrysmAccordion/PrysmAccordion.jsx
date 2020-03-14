// core
import React, {useState} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


// components


// styles
import './PrysmAccordion.scss';
import step1 from "../../../../../assets/image/prysm/step-1.svg";
import step2 from "../../../../../assets/image/prysm/step-2.svg";
import step3 from "../../../../../assets/image/prysm/step-3.svg";
import step4 from "../../../../../assets/image/prysm/step-4_1.svg";
import step5 from "../../../../../assets/image/prysm/step-5.svg";

export const PrysmAccordion = () => {
    const [show, setShow] = useState(false);

    return (
        <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            className='prysmAccordion'>
            <AccordionItem>
                <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
                    <AccordionItemButton>
                        Step 1
                        <div>Generate patient list</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        When clinicians are engaged in a process with analytically sound information and consistent
                        follow
                        up reporting, they are highly willing to partner with development.
                    </h3>
                    <img src={step1} alt="step1"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
                    <AccordionItemButton>
                        Step 2
                        <div>Review with clinicians</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        When clinicians are engaged in a process with analytically sound information and consistent
                        follow
                        up reporting, they are highly willing to partner with development.
                    </h3>
                    <img src={step2} alt="step2"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
                    <AccordionItemButton>
                        Step 3
                        <div>Contact patients</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Intuitive in-platform phone call and email tracking enables fundraisers to efficiently record
                        discovery activity.
                    </h3>
                    <img src={step3} alt="step3"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
                    <AccordionItemButton>
                        Step 4
                        <div>Report outcomes</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Intuitive single click reporting enables fundraisers to view clinicians’ patients using a
                        scoring
                        model that combines affinity and capacity.
                    </h3>
                    <img src={step4} alt="step4"/>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem>
                <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
                    <AccordionItemButton>
                        Step 5
                        <div>Optimize strategy</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Easily track and record outcomes of discovery activity to optimize program strategy.
                    </h3>
                    <img src={step5} alt="step5"/>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
    );
};