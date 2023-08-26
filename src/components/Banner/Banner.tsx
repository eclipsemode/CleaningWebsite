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
import MaterialDialog from "../MaterialDialog";

const Banner = () => {
    return (
        <Container>

            <Stack spacing={4}>
                <section className={styles.root}>
                    <Stack direction='column' justifyContent='center'>
                        <h1 className={styles.title}>ПРАВИЛЬНАЯ ХИМЧИСТКА МЕБЕЛИ</h1>
                        <h2 className={styles.subtitle}>В Армавире</h2>
                        <ul className={styles.list} itemScope itemType="http://schema.org/BreadcrumbList">
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                                className={styles.additional}>
                                <AddIcon style={{color: '#0360c0'}}/>
                                <Link itemProp="item" href='/'><span itemProp='name'>С 2020 года 3489 единиц почищенной мебели</span></Link>
                                <meta itemProp="position" content="1"/>
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                                className={styles.additional}>
                                <AddIcon style={{color: '#0360c0'}}/>
                                <Link itemProp="item" href='/'><span
                                    itemProp='name'>Биоразлагаемые чистящие средства</span></Link>
                                <meta itemProp="position" content="2"/>
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                                className={styles.additional}>
                                <AddIcon style={{color: '#0360c0'}}/>
                                <Link itemProp="item" href='/'><span
                                    itemProp='name'>Гарантия максимального результата</span></Link>
                                <meta itemProp="position" content="3"/>
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                                className={styles.additional}>
                                <AddIcon style={{color: '#0360c0'}}/>
                                <Link itemProp="item" href='/'><span itemProp='name'>121 отзыв на 5 звезд</span></Link>
                                <meta itemProp="position" content="4"/>
                            </li>
                        </ul>

                        <Stack direction='row' spacing={5} marginTop='20px'>
                            <MaterialDialog textButton='Заказать'/>
                            <Image src={YandexImg} width={150} height={50} alt="yandex"/>
                        </Stack>
                    </Stack>


                    <Image className={styles.img} src={BannerImg} width={612} alt="Divan"/>
                </section>

                <section className={styles.bottomSection}>
                    <SliderSlick>
                        <>
                            <div itemScope itemType="https://schema.org/Service"
                                 className={styles.img}>
                                <Image itemProp='image' src={Img6} alt="expample"/>
                                <span itemProp="name">Делаем чистку ковролина</span>
                            </div>
                            <div itemScope itemType="https://schema.org/Service" className={styles.img}>
                                <Image src={Img2} alt="expample"/>
                                <span itemProp="name">Делаем химчистку автомобилей</span>
                            </div>
                            <div itemScope itemType="https://schema.org/Service" className={styles.img}>
                                <Image src={Img5} alt="expample"/>
                                <span itemProp="name">Сдаем в прокат оборудование для уборки</span>
                            </div>
                            <div itemScope itemType="https://schema.org/Service" className={styles.img}>
                                <Image src={Img4} alt="expample"/>
                                <span itemProp="name">Моем окна</span>
                            </div>
                        </>
                    </SliderSlick>
                </section>

            </Stack>
        </Container>
    )
};

export default Banner;