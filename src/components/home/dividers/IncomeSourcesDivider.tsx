import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const IncomeSourcesDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [incomeSourcesDividerClass, setIncomeSourcesClass] = useState(false);
    useEffect(() => {
        const incomeSources = document.querySelectorAll('.incomeSources');
        document.addEventListener('scroll', () => {
            if (!incomeSourcesDividerClass) {
                animate(setIncomeSourcesClass, incomeSources[0]);
            }
        })
    }, [])

    return (
        <HR className={`incomeSources ${incomeSourcesDividerClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default IncomeSourcesDivider