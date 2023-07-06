import React from 'react';
import Title from "../../ui/Title";
import {AccordionDetails, AccordionSummary, Box, Container, Stack, Typography} from "@lib/mui";
import {ExpandMoreIcon} from '@lib/mui-icons';
import {Element} from '@lib/react-scroll'
import AccordionCustom from "@components/QuestionAndAnswerBlock/ui/AccordionCustom";

const QuestionAndAnswerBlock = () => {
    const renderExpandIcon = () => <ExpandMoreIcon sx={{color: '#0360c0', width: '40px', height: '40px'}}/>

    return (
        <section>
            <Container sx={{padding: '50px 0'}}>
                <Stack spacing={5}>
                    <Element name='voprosy'>
                        <Title color='secondary' textMain='вопросы' textSecondary='и ответы'/>
                    </Element>
                    <Box>
                        <AccordionCustom name='panel1'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Неприятный запах от животного можете
                                        удалить?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Да. Нейтрализуем запах с гарантией результата. Если запах вновь проявится,
                                        повторная
                                        нейтрализация БЕСПЛАТНО.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>
                        <AccordionCustom name='panel2'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>
                                        Нужно уходить из дома во время чистки?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Нет, процедура полностью безопасна, мы не используем средства с резкими
                                        запахами.
                                        Можно находиться дома и даже смотреть за работой.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>
                        <AccordionCustom name='panel3'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>
                                        Шерсть животных можете убрать?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Чистка подразумевает удаление всех загрязнений с обивки, в том числе и шерсть
                                        животных.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel4'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>У Меня аллергия на моющие средства, могу ли я
                                        воспользоваться услугой?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Да, можете. Технология чистки подразумевает полное удаление остатков моющих
                                        средств
                                        из обивки. Обязательно предупредите мастера про аллергию и он сделает
                                        дополнительную
                                        промывку чистой водой.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel5'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Когда сможете приехать?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Работаем без выходных, выезжаем в любое удобное время дня и ночи.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel6'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>От чего зависит стоимость чистки?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Стоимость зависит от:<br/>
                                        Размера изделия<br/>
                                        Формы спинок и подлокотников<br/>
                                        Степени загрязнения/наличия запаха<br/>
                                        Материала обивки<br/>
                                        Наличия съемных подушек
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel7'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>С организациями работаете?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Работаем с любыми организациями по договору, через расчетный счет.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel8'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Сколько сохнет после чистки?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Экспресс сушка - 2-3 часа, самостоятельное высыхание 6-10 часов
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel9'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Сколько времени занимает чистка?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Среднее время чистки одного изделия 2-4 часа
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel10'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>В область выезжаете?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Да, выезжаем. В ближайшие города области выезд бесплатный, выезд в отдаленные
                                        областные города и районы обговаривается индивидуально.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel11'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Процедура безопасна для детей и
                                        животных?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Технология полностью безопасна для детей и животных. Процедура проходит без
                                        резких
                                        неприятных запахов, можно находиться дома и наблюдать за процессом.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>

                        <AccordionCustom name='panel12'>
                            <div itemScope itemType="https://schema.org/Question">
                                <AccordionSummary
                                    expandIcon={renderExpandIcon()}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography itemProp="name" sx={{fontWeight: 600}}>Какие способы оплаты?</Typography>
                                </AccordionSummary>
                                <AccordionDetails itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                    <Typography itemProp="text" sx={{color: 'text.secondary'}}>
                                        Наличные, перевод на карту, оплата на расчетный счет.
                                    </Typography>
                                </AccordionDetails>
                            </div>
                        </AccordionCustom>
                    </Box>
                </Stack>
            </Container>
        </section>
    );
};

export default QuestionAndAnswerBlock;