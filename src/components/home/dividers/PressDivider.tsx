import { HR, LeftLine, RightLine } from "@/styles/pages/components/home/Divider.styled"
import { useEffect, useState } from "react"


const PressDivider = () => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [pressClass, setPressClass] = useState(false);
    useEffect(() => {
        const divider = document.querySelectorAll('.press');
        document.addEventListener('scroll', () => {
            if (!pressClass) {
                animate(setPressClass, divider[0]);
            }
        })
    }, [])

    return (
        <HR className={`press ${pressClass ? 'animate' : ''}`}>
            <LeftLine></LeftLine>
            <img src="/assets/images/home/diamond.svg" alt="..." />
            <RightLine></RightLine>
        </HR>
    )
}

export default PressDivider