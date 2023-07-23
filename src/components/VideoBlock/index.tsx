import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'
import {Container, Divider, Stack} from "@lib/mui";
import Title from "@ui/Title";
import {Element} from '@lib//react-scroll'
import SliderSlick from "@components/VideoBlock/ui/SliderSlick";
import Image from "next/image";

const VideoBlock = () => {
    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <Stack justifyContent='center' textAlign='center'>
                    <Element name='process'>
                        <Title color='secondary' textMain='Как мы' textSecondary='чистим мебель?'
                               style={{marginTop: '50px'}}/>
                        <p style={{maxWidth: '860px', margin: '0 auto'}}>В работе используем только
                            профессиональное оборудование, специализированные моющие средства и пятновыводители.
                            Результат
                            нашей работы — не только видимая чистота, а действительно чистый снаружи и внутри диван!</p>
                    </Element>
                    <div className={styles.video}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fDy5SZ7YtmI"
                                title="YouTube video player" frameBorder="0" name="su-youtube"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div itemScope itemType="https://schema.org/VideoObject" style={{display: 'none'}}>
                        <a itemProp="url" href="https://www.youtube.com/embed/fDy5SZ7YtmI">
							<span itemProp="name">Химчистка мебели в г. Армавир</span>
						</a>
						<p itemProp="description">В работе используем только профессиональное оборудование, специализированные моющие средства и пятновыводители. Результат нашей работы — не только видимая чистота, а действительно чистый снаружи и внутри диван!</p>
						<p itemProp="duration" content="T0M39S"></p>
						<p itemProp="isFamilyFriendly" content="true"></p>
						<p>Дата загрузки:<span itemProp="uploadDate">2023-04-20T00:00:00</span></p>
						<span itemProp="thumbnail" itemScope itemType="https://schema.org/ImageObject">
							<Image width={480} height={360} itemProp="contentUrl" src="https://i1.ytimg.com/vi/fDy5SZ7YtmI/hqdefault.jpg" alt='video-promo'/>
						</span>
						<link itemProp="thumbnailUrl" href="https://i1.ytimg.com/vi/fDy5SZ7YtmI/hqdefault.jpg"/>
                    </div>
                    <Divider variant="middle" sx={{borderWidth: '1px'}}/>
                    <SliderSlick />
                </Stack>
            </Container>
        </section>
    );
};

export default VideoBlock;