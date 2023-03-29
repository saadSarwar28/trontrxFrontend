import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const WhyChooseDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [whyDividerClass, setWhyDividerClass] = useState(false);
    useEffect(() => {
        const whyDivider = document.querySelectorAll('.whyDivider');
        document.addEventListener('scroll', () => {
            if (!whyDividerClass) {
                animate(setWhyDividerClass, whyDivider[0]);
            }
        })
    }, [])

    return (
        <HR className={`whyDivider ${whyDividerClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default WhyChooseDivider