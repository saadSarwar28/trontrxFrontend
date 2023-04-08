import { PressStyled, PressHeading, PressLinks } from "@/styles/pages/components/home/Press.styled"
import Link from "next/link"
import { useState, useEffect } from "react"


const Press = () => {
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
    const [pressLink1Class, setPressLink1Class] = useState(false);
    const [pressLink2Class, setPressLink2Class] = useState(false);
    const [pressLink3Class, setPressLink3Class] = useState(false);
    const [pressLink4Class, setPressLink4Class] = useState(false);
    const [pressLink5Class, setPressLink5Class] = useState(false);
    const [pressLink6Class, setPressLink6Class] = useState(false);
    const [pressLink7Class, setPressLink7Class] = useState(false);

    useEffect(() => {
        const pressHeading = document.querySelectorAll('.pressHeading');
        const pressLink1 = document.querySelectorAll('.pressLink1');
        const pressLink2 = document.querySelectorAll('.pressLink2');
        const pressLink3 = document.querySelectorAll('.pressLink3');
        const pressLink4 = document.querySelectorAll('.pressLink4');
        const pressLink5 = document.querySelectorAll('.pressLink5');
        const pressLink6 = document.querySelectorAll('.pressLink6');
        const pressLink7 = document.querySelectorAll('.pressLink7');

        document.addEventListener('scroll', () => {
            if (!pressHeadingClass) {
                animate(setPressHeadingClass, pressHeading[0]);
            }
            if (!pressLink1Class) {
                animate(setPressLink1Class, pressLink1[0]);
            }
            if (!pressLink2Class) {
                animate(setPressLink2Class, pressLink2[0]);
            }
            if (!pressLink3Class) {
                animate(setPressLink3Class, pressLink3[0]);
            }
            if (!pressLink4Class) {
                animate(setPressLink4Class, pressLink4[0]);
            }
            if (!pressLink5Class) {
                animate(setPressLink5Class, pressLink5[0]);
            }
            if (!pressLink6Class) {
                animate(setPressLink6Class, pressLink6[0]);
            }
            if (!pressLink7Class) {
                animate(setPressLink7Class, pressLink7[0]);
            }
        })
    })


    return (
        <PressStyled>
            <PressHeading className={`pressHeading ${pressHeadingClass ? 'animate' : ''}`}>
                Press
                <span> Loves </span>
                Us
            </PressHeading>
            <PressLinks>
                <Link href="#" className={`pressLink1 ${pressLink1Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/forbes.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink2 ${pressLink2Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/coin-telegraph.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink3 ${pressLink3Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/yahoo.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink4 ${pressLink4Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/jinse.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink5 ${pressLink5Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/blockchain-gamer.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink6 ${pressLink6Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/btc-manager.png" alt="..." />
                </Link>
                <Link href="#" className={`pressLink7 ${pressLink7Class ? 'animate' : ''}`}>
                    <img src="assets/images/home/press/crypto-briefing.png" alt="..." />
                </Link>
            </PressLinks>
        </PressStyled>
    )
}

export default Press