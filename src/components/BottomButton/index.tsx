'use client'
import styles from './index.module.css'
import React from "react";
import {Dialog} from "@lib/mui";
import FormSend from "@components/FormSend";

const BottomButton = () => {
    const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
    const handleClick = () => {
        setDialogOpen(!dialogOpen);
    }

    const renderButton = () => (
        <div
            className={styles.root}
            onClick={handleClick}>
            <div className={styles.button}>
                <div className={styles.swipe}></div>
                <span className={styles.text}>Оставить заявку</span>
            </div>
        </div>
    )

    return (
        <>
            { !dialogOpen && renderButton() }
            <Dialog open={dialogOpen} onClose={handleClick}>
                <FormSend onSend={handleClick} onClose={handleClick}/>
            </Dialog>
        </>
    );
};

export default BottomButton;