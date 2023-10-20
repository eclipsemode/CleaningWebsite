'use client'
import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    );
};

export default Loading;