import React from 'react';
import styles from './index.module.css'
import {Button, Container, Link, Stack} from "@lib//mui";
import {AddIcon} from '@lib/mui-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from '@public/images/default/divan-2-3.jpg'
import YandexImg from '@public/images/default/orig.png'
import Img2 from "@public/images/additional/2.jpg";
import Img4 from "@public/images/additional/moem-okna-2.jpg";
import Img5 from "@public/images/additional/rent.jpg";
import Img6 from "@public/images/additional/kovrolin.jpg";
import Image from "next/image";
import SliderSlick from "@components/Banner/ui/SliderSlick";

const Banner = () => {
    return (
        <Container>
            <Stack spacing={4}>
                <section itemScope itemType="http://schema.org/BreadcrumbList" className={styles.root}>
                    <Stack direction='column' justifyContent='center'>
                        <h1 itemProp="name" className={styles.title}>ПРАВИЛЬНАЯ ХИМЧИСТКА МЕБЕЛИ</h1>
                        <h2 itemProp="itemListElement" className={styles.subtitle}>В Армавире</h2>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                            className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>С 2020 года 3489 единиц
                            почищенной мебели
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                            className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>Биоразлагаемые чистящие
                            средства
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                            className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>Гарантия максимального
                            результата
                        </li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                            className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>121 отзыв на 5 звезд
                        </li>

                        <Stack direction='row' spacing={5} marginTop='20px'>
                            <Link href='tel:+79182330132'><Button variant="contained" sx={{
                                maxWidth: '170px',
                                width: '100%'
                            }}>Заказать</Button></Link>
                            <Image src={YandexImg} width={150} height={50} alt="yandex"/>
                        </Stack>
                    </Stack>


                    <Image className={styles.img} src={BannerImg} width={612} alt="Divan"/>
                </section>

                <section className={styles.bottomSection}>
                    <SliderSlick>
                        <>
                            <div itemProp="offers" itemScope itemType="https://schema.org/ImageObject"
                                 className={styles.img}>
                                <Image src={Img6} alt="expample"/>
                                <span itemProp="description">Делаем чистку ковролина</span>
                            </div>
                            <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className={styles.img}>
                                <Image src={Img2} alt="expample"/>
                                <span itemProp="description">Делаем химчистку автомобилей</span>
                            </div>
                            <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className={styles.img}>
                                <Image src={Img5} alt="expample"/>
                                <span itemProp="description">Сдаем в прокат оборудование для уборки</span>
                            </div>
                            <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className={styles.img}>
                                <Image src={Img4} alt="expample"/>
                                <span itemProp="description">Моем окна</span>
                            </div>
                        </>
                    </SliderSlick>
                </section>

            </Stack>
        </Container>
    )
};

export default Banner;