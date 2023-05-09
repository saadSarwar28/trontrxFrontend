import React from 'react'
import { PressCarouselStyled, PressHeading } from '@/styles/pages/components/home/PressCarousel.styled'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Link from 'next/link'
import { useState, useEffect } from 'react';


const PressCarousel = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 100) {
            setAnimationClass(false);
        }
    }

    const [pressHeadingClass, setPressHeadingClass] = useState(false);
    const [pressLinksClass, setPressLinksClass] = useState(false);

    useEffect(() => {
        const pressHeading = document.querySelectorAll('.pressHeading');
        const pressLinks = document.querySelectorAll('.pressLinks');

        document.addEventListener('scroll', () => {
            if (!pressHeadingClass) {
                animate(setPressHeadingClass, pressHeading[0]);
            }
            if (!pressLinksClass) {
                animate(setPressLinksClass, pressLinks[0]);
            }
        })
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };

    return (
        <PressCarouselStyled>
            <PressHeading className={`pressHeading ${pressHeadingClass ? 'animate' : ''}`}>
                Press
                <span> Loves </span>
                Us
            </PressHeading>
            <div className={`pressLinks ${pressLinksClass ? 'animate' : ''}`}>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >
                    <Link href="#">
                        <img src="assets/images/home/press/forbes.png" alt="..." />
                    </Link>
                    <Link href="#">
                        <img src="assets/images/home/press/coin-telegraph.png" alt="..." />
                    </Link>
                    <Link href="#">
                        <img src="assets/images/home/press/yahoo.png" alt="..." />
                    </Link>
                    <Link href="#">
                        <img src="assets/images/home/press/jinse.png" alt="..." />
                    </Link>
                    <Link href="#" id="blockChainGamer">
                        <img src="assets/images/home/press/blockchain-gamer.png" alt="..." />
                    </Link>
                    <Link href="#">
                        <img src="assets/images/home/press/btc-manager.png" alt="..." />
                    </Link>
                    <Link href="#">
                        <img src="assets/images/home/press/crypto-briefing.png" alt="..." />
                    </Link>
                </Carousel>
            </div>
        </PressCarouselStyled>
    )
}

export default PressCarousel