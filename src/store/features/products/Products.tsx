"use client"
import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea, CardActions,
    CardContent,
    Chip, Container,
    Grid, Link,
    Stack,
    Typography
} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {setProductsType} from "./productsSlice";
import {CSSTransition} from 'react-transition-group';
import './ProductsTransitionGroup.css'
import Image from "next/image";
import {NoSSR} from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr";

const Products = () => {
    const [transition, setTransition] = React.useState<boolean>(true);
    const nodeRef = React.useRef(null);
    const dispatch = useAppDispatch();
    const {type, textile, leather, carpet} = useAppSelector(state => state.product)

    return (
        <Stack sx={{position: 'relative', overflow: 'hidden'}}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <NoSSR>
                        {
                            typeof window !== 'undefined' && window.innerWidth <= 546 ?
                                (
                                    <ButtonGroup
                                        orientation={'vertical'}
                                        fullWidth={true}
                                        variant="outlined" aria-label="vertical outlined button group">
                                        <Button variant={type === 'textile' ? 'contained' : 'outlined'} onClick={() => {
                                            if (type !== 'textile') {
                                                setTransition(false);
                                                dispatch(setProductsType('textile'));
                                            }
                                        }}>Текстильная обивка</Button>
                                        <Button variant={type === 'leather' ? 'contained' : 'outlined'} onClick={() => {
                                            if (type !== 'leather') {
                                                setTransition(false);
                                                dispatch(setProductsType('leather'))
                                            }
                                        }}>Кожаная обивка</Button>
                                        <Button variant={type === 'carpet' ? 'contained' : 'outlined'} onClick={() => {
                                            if (type !== 'carpet') {
                                                setTransition(false);
                                                dispatch(setProductsType('carpet'))
                                            }
                                        }}>Ковролин</Button>
                                    </ButtonGroup>
                                )
                                :
                                    (
                                        <ButtonGroup
                                            orientation={'horizontal'}
                                            fullWidth={true}
                                            variant="outlined" aria-label="vertical outlined button group">
                                            <Button variant={type === 'textile' ? 'contained' : 'outlined'} onClick={() => {
                                                if (type !== 'textile') {
                                                    setTransition(false);
                                                    dispatch(setProductsType('textile'));
                                                }
                                            }}>Текстильная обивка</Button>
                                            <Button variant={type === 'leather' ? 'contained' : 'outlined'} onClick={() => {
                                                if (type !== 'leather') {
                                                    setTransition(false);
                                                    dispatch(setProductsType('leather'))
                                                }
                                            }}>Кожаная обивка</Button>
                                            <Button variant={type === 'carpet' ? 'contained' : 'outlined'} onClick={() => {
                                                if (type !== 'carpet') {
                                                    setTransition(false);
                                                    dispatch(setProductsType('carpet'))
                                                }
                                            }}>Ковролин</Button>
                                        </ButtonGroup>
                                    )
                        }
                    </NoSSR>
                </Box>
            </Container>

            <CSSTransition nodeRef={nodeRef} in={transition} timeout={300} classNames='products' unmountOnExit
                           onExited={() => setTransition(true)}>
                <Container ref={nodeRef} sx={{paddingBottom: '24px'}}>
                    <Box sx={{flexGrow: 1}} marginTop='40px'>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}
                              justifyContent='center'
                              gridAutoFlow={'row'}>
                            {(type === 'textile' ? textile : type === 'leather' ? leather : type === 'carpet' ? carpet : []).map((item) => (
                                <Grid item xs={4} sm={4} md={4} key={item.id} style={{minWidth: '345px'}}>
                                    <Card itemScope itemType="https://schema.org/Product" sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        position: 'relative'
                                    }}>
                                        {!!item.chip && <Chip sx={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            zIndex: '1',
                                            height: '25px',
                                            background: 'rgba(0, 0, 0, .8)',
                                            color: '#fff'
                                        }} label={item.chip}/>}
                                        <CardActionArea>
                                            <Image itemProp="image" src={item.img} alt='product'
                                                   style={{width: '100%', height: '200px', objectFit: 'contain'}}/>
                                            <CardContent style={{textAlign: 'center'}}>
                                                <Typography itemProp="name" gutterBottom variant="h5" component="div"
                                                            whiteSpace='nowrap'
                                                            fontSize='14px' textTransform='uppercase'>
                                                    {item.name}
                                                </Typography>
                                                <Typography itemProp="description" variant="body2" color="text.secondary" fontSize='14px'
                                                            marginTop='15px' whiteSpace='nowrap'>
                                                    {item.description}
                                                </Typography>
                                                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                                {item.price && (
                                                    <Typography variant="body2" color="text.secondary" fontSize='14px'
                                                                marginTop='15px' style={{color: '#000'}}>
                                                        <span itemProp="price" style={{fontSize: '24px'}}><meta itemProp="priceCurrency" content="RUB"/>{item.price}</span> РУБ.
                                                    </Typography>
                                                )}
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Link itemProp="url" href='tel:+79182330132'><Button size="small" color="primary">
                                                Заказать
                                            </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </CSSTransition>

        </Stack>
    );
}
    ;

    export default Products;