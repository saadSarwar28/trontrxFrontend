import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const MatchingIncomeDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [matchingIncomeDividerClass, setMatchingIncomeClass] = useState(false);
    useEffect(() => {
        const matchingIncome = document.querySelectorAll('.matchingIncome');
        document.addEventListener('scroll', () => {
            if (!matchingIncomeDividerClass) {
                animate(setMatchingIncomeClass, matchingIncome[0]);
            }
        })
    }, [])

    return (
        <HR className={`matchingIncome ${matchingIncomeDividerClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default MatchingIncomeDivider