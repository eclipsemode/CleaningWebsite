"use client"
import React from 'react';
import {Accordion} from "@lib/mui";

const AccordionCustom = ({children, name}: {children: React.JSX.Element, name: string}) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Accordion expanded={expanded === name} onChange={handleChange(name)}>
            {children}
        </Accordion>
    );
};

export default AccordionCustom;