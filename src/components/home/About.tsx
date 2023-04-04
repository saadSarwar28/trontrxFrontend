import { AboutStyled, LeftColumn, Paragraphs, RightColumn, AboutHeading } from "@/styles/pages/components/home/About.styled"
import { useEffect, useState } from "react"


const About = ({ content }: any) => {
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [aboutHeadingClass, setAboutHeadingClass] = useState(false);
    const [aboutImgClass, setAboutImgClass] = useState(false);
    const [aboutPara1Class, setaboutPara1Class] = useState(false);
    const [aboutPara2Class, setaboutPara2Class] = useState(false);
    const [aboutPara3Class, setaboutPara3Class] = useState(false);
    const [aboutPara4Class, setaboutPara4Class] = useState(false);
    const [aboutPara5Class, setaboutPara5Class] = useState(false);

    useEffect(() => {
        const heading = document.querySelectorAll('.aboutHeading');
        const aboutPara = document.querySelectorAll('.aboutPara');
        const aboutImg = document.querySelectorAll('.aboutImg');

        document.addEventListener('scroll', () => {
            if (!aboutHeadingClass) {
                animate(setAboutHeadingClass, heading[0]);
            }
            if (!aboutImgClass) {
                animate(setAboutImgClass, aboutImg[0]);
            }
            if (!aboutPara1Class) {
                animate(setaboutPara1Class, aboutPara[0]);
            }
            if (!aboutPara2Class) {
                animate(setaboutPara2Class, aboutPara[1]);
            }
            if (!aboutPara3Class) {
                animate(setaboutPara3Class, aboutPara[2]);
            }
            if (!aboutPara4Class) {
                animate(setaboutPara4Class, aboutPara[3]);
            }
            if (!aboutPara5Class) {
                animate(setaboutPara5Class, aboutPara[4]);
            }
        })
    }, [])

    return (
        <AboutStyled>
            <LeftColumn>
                <AboutHeading className={`aboutHeading ${aboutHeadingClass ? 'animate' : ''}`}>
                    {content.about.mainHeading[0]}
                    <span>{content.about.mainHeading[1]}</span>
                </AboutHeading>
                <Paragraphs>
                    {/* {content.about.paragraphs.map((paragraph: string, index: number) => ( */}
                    <li className={`aboutPara ${aboutPara1Class ? 'animate' : ''}`}>{content.about.paragraphs[0]}</li>
                    <li className={`aboutPara ${aboutPara2Class ? 'animate' : ''}`}>{content.about.paragraphs[1]}</li>
                    <li className={`aboutPara ${aboutPara3Class ? 'animate' : ''}`}>{content.about.paragraphs[2]}</li>
                    <li className={`aboutPara ${aboutPara4Class ? 'animate' : ''}`}>{content.about.paragraphs[3]}</li>
                    <li className={`aboutPara ${aboutPara5Class ? 'animate' : ''}`}>{content.about.paragraphs[4]}</li>
                    {/* ))} */}
                </Paragraphs>
            </LeftColumn>
            <RightColumn>
                <img src="/assets/images/home/about/about-img.png" className={`aboutImg ${aboutImgClass ? 'animate' : ''}`} />
            </RightColumn>
        </AboutStyled>
    )
}

export default About