'use client'
import React from 'react';
import {Alert, Container} from "@mui/material";

const NotFound = () => {
    return (
        <Container sx={{height: '100%'}}>
            <Alert sx={{marginTop: '40px'}} variant="filled" severity="error">
                К сожалению данная страница не найдена.
            </Alert>
        </Container>
    );
};

export default NotFound;