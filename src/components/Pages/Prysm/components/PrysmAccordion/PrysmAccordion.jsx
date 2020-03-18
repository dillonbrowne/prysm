// core
import React from 'react';
import {Accordion, AccordionItem, AccordionItemPanel} from 'react-accessible-accordion';
import Img from "react-image"

// components


// styles
import './PrysmAccordion.scss';
import step1 from "../../../../../assets/image/prysm/step-1.svg";
import step2 from "../../../../../assets/image/prysm/step-2.svg";
import step3 from "../../../../../assets/image/prysm/step-3.svg";
import step4 from "../../../../../assets/image/prysm/step-4_1.svg";
import step5 from "../../../../../assets/image/prysm/step-5.svg";
import {PrysmAccordionItemHeading} from "./PrysmAccordionItemHeading/PrysmAccordionItemHeading";

export const PrysmAccordion = () => {
    return (
        <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            className='prysmAccordion'>
            <AccordionItem>
                <PrysmAccordionItemHeading title=' Step 1' subtitle='Generate patient list'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        When clinicians are engaged in a process with analytically sound information and consistent
                        follow
                        up reporting, they are highly willing to partner with development.
                    </h3>
                    <Img src={step1} alt="step1"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <PrysmAccordionItemHeading title=' Step 2' subtitle='Review with clinicians'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        When clinicians are engaged in a process with analytically sound information and consistent
                        follow
                        up reporting, they are highly willing to partner with development.
                    </h3>
                    <Img src={step2} alt="step2"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <PrysmAccordionItemHeading title=' Step 3' subtitle='Contact patients'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Intuitive in-platform phone call and email tracking enables fundraisers to efficiently record
                        discovery activity.
                    </h3>
                    <Img src={step3} alt="step3"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <PrysmAccordionItemHeading title=' Step 4' subtitle='Report outcomes'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Intuitive single click reporting enables fundraisers to view clinicians’ patients using a
                        scoring
                        model that combines affinity and capacity.
                    </h3>
                    <Img src={step4} alt="step4"/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <PrysmAccordionItemHeading title=' Step 5' subtitle='Optimize strategy'/>
                <AccordionItemPanel className="accordionPanel">
                    <h3>
                        Easily track and record outcomes of discovery activity to optimize program strategy.
                    </h3>
                    <Img src={step5} alt="step5"/>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
    );
};
