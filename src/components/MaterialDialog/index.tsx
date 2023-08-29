'use client'
import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from "@lib/mui";
import {useForm} from "react-hook-form";
import axios from "axios";

interface IProps {
    textButton: string
}

interface IFormProps {
    name: string,
    tel: string,
    type: string,
    size: string,
    commentary: string
}

const MaterialDialog = ({textButton}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormProps>();

    const [type, setType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSend = (data: IFormProps) => {
        const token = '6449769534:AAFrBHcv8rjoV0b4-TCu2KkHz60HPNYkdSw';
        const chatId = '-1001897275974';
        const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Имя: </b>${data.name}\n`;
        message += `<b>Телефон: </b>${data.tel}\n`;
        message += `<b>Тип обивки: </b>${data.type}\n`;
        message += `<b>Размеры: </b>${data.size}\n`;
        message += `<b>Комментарий к заказу: </b>${data.commentary}\n`;

        axios.post(urlApi, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })

        reset();
        setType('')
        handleClose();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                {textButton}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(handleSend)}>
                    <DialogTitle>Оставить заявку</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Пожалуйста, введите данные для отправки.
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Имя"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register('name', {required: true})}
                        />

                        <TextField
                            margin="dense"
                            label="Номер телефона"
                            type="tel"
                            fullWidth
                            variant="standard"
                            {...register('tel', {required: true})}
                        />

                        <FormControl variant="standard" sx={{ width: '100%', margin: '0' }} >
                            <InputLabel id="demo-simple-select-standard-label">Тип обивки</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={type}
                                onChange={handleChange}
                                label="Тип обивки"
                                inputProps={
                                {...register('type', {required: true})}
                                }
                            >
                                <MenuItem value='Текстиль'>Текстиль</MenuItem>
                                <MenuItem value='Кожа'>Кожа</MenuItem>
                                <MenuItem value='Ковролин'>Ковролин</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            margin="dense"
                            label="Размер"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register('size', {required: true})}
                        />

                        <TextField
                            margin="dense"
                            label="Комментарий к заказу"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register('commentary', {required: true})}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Закрыть</Button>
                        <Button type='submit'>Отправить</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default MaterialDialog;