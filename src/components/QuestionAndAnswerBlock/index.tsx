import React from 'react';
import Title from "../../ui/Title";
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Element } from 'react-scroll'

const QuestionAndAnswerBlock = () => {
		const [expanded, setExpanded] = React.useState<string | false>(false);

		const renderExpandIcon = () => <ExpandMoreIcon sx={{color: '#0360c0', width: '40px', height: '40px'}}/>

		const handleChange =
				(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
						setExpanded(isExpanded ? panel : false);
				};
		return (
				<section>
						<Container sx={{padding: '50px 0'}}>
								<Stack spacing={5}>
										<Element name='voprosy'>
										<Title color='secondary' textMain='вопросы' textSecondary='и ответы'/>
										</Element>
										<Box>
												<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel1bh-content"
																id="panel1bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Неприятный запах от животного можете
																		удалить?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Да. Нейтрализуем запах с гарантией результата. Если запах вновь проявится, повторная
																		нейтрализация БЕСПЛАТНО.
																</Typography>
														</AccordionDetails>
												</Accordion>
												<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel2bh-content"
																id="panel2bh-header"
														>
																<Typography sx={{fontWeight: 600}}>
																		Нужно уходить из дома во время чистки?
																</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Нет, процедура полностью безопасна, мы не используем средства с резкими запахами.
																		Можно находиться дома и даже смотреть за работой.
																</Typography>
														</AccordionDetails>
												</Accordion>
												<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel3bh-content"
																id="panel3bh-header"
														>
																<Typography sx={{fontWeight: 600}}>
																		Шерсть животных можете убрать?
																</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Чистка подразумевает удаление всех загрязнений с обивки, в том числе и шерсть
																		животных.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>У Меня аллергия на моющие средства, могу ли я
																		воспользоваться услугой?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Да, можете. Технология чистки подразумевает полное удаление остатков моющих средств
																		из обивки. Обязательно предупредите мастера про аллергию и он сделает дополнительную
																		промывку чистой водой.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Когда сможете приехать?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Работаем без выходных, выезжаем в любое удобное время дня и ночи.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>От чего зависит стоимость чистки?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Стоимость зависит от:<br/>
																		Размера изделия<br/>
																		Формы спинок и подлокотников<br/>
																		Степени загрязнения/наличия запаха<br/>
																		Материала обивки<br/>
																		Наличия съемных подушек
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>С организациями работаете?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Работаем с любыми организациями по договору, через расчетный счет.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Сколько сохнет после чистки?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Экспресс сушка - 2-3 часа, самостоятельное высыхание 6-10 часов
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Сколько времени занимает чистка?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Среднее время чистки одного изделия 2-4 часа
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>В область выезжаете?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Да, выезжаем. В ближайшие города области выезд бесплатный, выезд в отдаленные
																		областные города и районы обговаривается индивидуально.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Процедура безопасна для детей и
																		животных?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Технология полностью безопасна для детей и животных. Процедура проходит без резких
																		неприятных запахов, можно находиться дома и наблюдать за процессом.
																</Typography>
														</AccordionDetails>
												</Accordion>

												<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
														<AccordionSummary
																expandIcon={renderExpandIcon()}
																aria-controls="panel4bh-content"
																id="panel4bh-header"
														>
																<Typography sx={{fontWeight: 600}}>Какие способы оплаты?</Typography>
														</AccordionSummary>
														<AccordionDetails>
																<Typography sx={{color: 'text.secondary'}}>
																		Наличные, перевод на карту, оплата на расчетный счет.
																</Typography>
														</AccordionDetails>
												</Accordion>

										</Box>
								</Stack>
						</Container>
				</section>
		);
};

export default QuestionAndAnswerBlock;