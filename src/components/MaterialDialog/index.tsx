'use client'
import React from 'react';
import {Button, Dialog} from "@lib/mui";
import styles from './index.module.css'
import FormSend from "@components/FormSend";

interface IProps {
    textButton: string
}

interface IFormProps {
    name: string,
    tel: string,
    type: string,
    commentary: string,
    smell: boolean
}

const MaterialDialog = ({textButton}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.btnContainer}>
            <Button variant="contained" onClick={handleClickOpen} className={styles.btn}>
                {textButton}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <FormSend onSend={handleClose} onClose={handleClose} />
            </Dialog>
        </div>
    );
};

export default MaterialDialog;