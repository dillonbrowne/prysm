// core
import React, {useState} from 'react';

// library
import {AccordionItemButton, AccordionItemHeading} from "react-accessible-accordion";

// styles
import './HomeAccordionItemHeading.scss';

export const HomeAccordionItemHeading = ({title}) => {
    const [show, setShow] = useState(false);

    return (
        <AccordionItemHeading className={`homeHeading ${show ? 'open' : ''}`} onClick={() => setShow(!show)}>
            <AccordionItemButton>
                {title}
            </AccordionItemButton>
        </AccordionItemHeading>
    );
};