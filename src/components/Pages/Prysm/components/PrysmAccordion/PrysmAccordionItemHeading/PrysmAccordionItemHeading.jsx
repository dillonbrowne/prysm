// core
import React, {useState} from 'react';

// library
import {AccordionItemButton, AccordionItemHeading} from "react-accessible-accordion";

// styles
import './PrysmAccordionItemHeading.scss';

export const PrysmAccordionItemHeading = ({title, subtitle}) => {
    const [show, setShow] = useState(false);

    return (
        <AccordionItemHeading className={`prysmHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
            <AccordionItemButton>
                {title}
                <div>{subtitle}</div>
            </AccordionItemButton>
        </AccordionItemHeading>
    );
};