import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const HowInvestDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [investDividerClass, setInvestDividerClass] = useState(false);
    useEffect(() => {
        const divider = document.querySelectorAll('.investDivider');
        document.addEventListener('scroll', () => {
            if (!investDividerClass) {
                animate(setInvestDividerClass, divider[0]);
            }
        })
    }, [])

    return (
        <HR className={`investDivider ${investDividerClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default HowInvestDivider