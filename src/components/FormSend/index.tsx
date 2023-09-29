import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select, SelectChangeEvent,
    TextField
} from "@lib/mui";
import {Checkbox, FormControlLabel} from "@mui/material";
import axios from "axios";
import {useForm} from "react-hook-form";

interface IFormProps {
    name: string,
    tel: string,
    type: string,
    commentary: string,
    smell: boolean
}

interface IProps {
    onSend: () => void;
    onClose?: () => void;
}

const FormSend = ({onSend, onClose}: IProps) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormProps>();

    const [type, setType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleSend = (data: IFormProps) => {
        const token = '6449769534:AAFrBHcv8rjoV0b4-TCu2KkHz60HPNYkdSw';
        const chatId = '-1001897275974';
        const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Имя: </b>${data.name}\n`;
        message += `<b>Телефон: </b>${data.tel}\n`;
        message += `<b>Что чистить: </b>${data.type}\n`;
        message += `<b>Неприятный запах: </b>${data.smell ? 'Да' : 'Нет'}\n`;
        message += `<b>Комментарий к заказу: </b>${data.commentary}\n`;

        axios.post(urlApi, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })

        reset();
        setType('');
        onSend();
    }

    return (
        <form onSubmit={handleSubmit(handleSend)}>
            <DialogTitle>Оставить заявку</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Пожалуйста, введите данные для отправки.
                </DialogContentText>

                <FormControl variant="standard" sx={{ width: '100%', margin: '0' }} >
                    <InputLabel>Что нужно почистить?</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={type}
                        onChange={handleChange}
                        label="Что нужно почистить"
                        inputProps={
                            {...register('type', {required: true})}
                        }
                    >
                        <MenuItem value='Текстиль'>Диван</MenuItem>
                        <MenuItem value='Кожа'>Матрас</MenuItem>
                        <MenuItem value='Ковролин'>Стулья</MenuItem>
                        <MenuItem value='Ковролин'>Ковролин</MenuItem>
                    </Select>
                </FormControl>

                <FormControlLabel sx={{marginTop: '20px'}} control={<Checkbox {...register('smell')} />} label="Неприятный запах" />

                <TextField
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
                {onClose && <Button onClick={handleClose}>Закрыть</Button>}
                <Button type='submit'>Отправить</Button>
            </DialogActions>
        </form>
    );
};

export default FormSend;