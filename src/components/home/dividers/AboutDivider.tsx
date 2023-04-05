import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const AboutDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [aboutClass, setAboutClass] = useState(false);
    useEffect(() => {
        const divider = document.querySelectorAll('.about');
        document.addEventListener('scroll', () => {
            if (!aboutClass) {
                animate(setAboutClass, divider[0]);
            }
        })
    }, [])

    return (
        <HR className={`about ${aboutClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default AboutDivider