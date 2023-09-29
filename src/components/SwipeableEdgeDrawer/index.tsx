'use client'
import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FormSend from "@components/FormSend";

const drawerBleeding = 56;

interface Props {
    window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer(props: Props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            {/* @ts-ignore */}
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        pointerEvents: 'all',
                        cursor: 'pointer',
                        textAlign: 'center',
                        background: '#0360c0',
                        boxShadow: '0px -10px 8px 0px rgba(34, 60, 80, 0.2)',
                        MozBoxShadow: '0px -10px 8px 0px rgba(34, 60, 80, 0.2)',
                        WebkitBoxShadow: '0px -10px 8px 0px rgba(34, 60, 80, 0.2)',
                    }}
                    onClick={toggleDrawer(true)}
                >
                    <Puller/>
                    <Typography sx={{ p: 2, color: '#fff' }}>Оставить заявку</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <div style={{maxWidth: '800px', margin: '0 auto'}}><FormSend onSend={toggleDrawer(false)} /></div>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}