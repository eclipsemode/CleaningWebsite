"use client"
import React from 'react';
import {Accordion} from "@lib/mui";
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface IAccordion {
    name: string,
    title: string,
    description: string
}

interface IProps {
    accordions: IAccordion[]
}

const AccordionCustom = ({accordions}: IProps) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return <>
        {
            accordions.map(item => (
                <Accordion key={item.name} expanded={expanded === item.name} onChange={handleChange(item.name)} itemScope itemType="https://schema.org/Question">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${item.name}-content`}
                            id={`${item.name}-header`}
                        >
                            <Typography itemProp="name">{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography itemProp="text">
                                {item.description}
                            </Typography>
                        </AccordionDetails>
                </Accordion>
            ))
        }
    </>
};

export default AccordionCustom;