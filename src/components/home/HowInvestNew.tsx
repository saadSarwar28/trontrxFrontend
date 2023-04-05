import { HowInvestNewStyled, HowInvestHeading, CarouselSection } from "@/styles/pages/components/home/HowInvestNew.styled"
import HowInvestCarousel from "./HowInvestCarousel"
import { useState, useEffect } from "react"


const HowInvestNew = ({ content }: any) => {
  const animate = (setAnimationClass: any, element: any) => {
    const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
    if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
      setAnimationClass(true);
    }
    if (elementBottomPosition > 50) {
      setAnimationClass(false);
    }
  }
  const [headingClass, setHeadingClass] = useState(false);
  const [howInvestImg, setHowInvestImg] = useState(false);

  // const [section0Class, setSection0Class] = useState(false);
  // const [section1Class, setSection1Class] = useState(false);
  // const [section2Class, setSection2Class] = useState(false);
  // const [section3Class, setSection3Class] = useState(false);
  useEffect(() => {
    const headingDesktop = document.querySelectorAll('.investHeading');
    const investImg = document.querySelectorAll('.investImg');

    // const section0 = document.querySelectorAll('.investSection0');
    // const section1 = document.querySelectorAll('.investSection1');
    // const section2 = document.querySelectorAll('.investSection2');
    // const section3 = document.querySelectorAll('.investSection3');

    document.addEventListener('scroll', () => {
      if (!headingClass) {
        animate(setHeadingClass, headingDesktop[0]);
      }

      if (!howInvestImg) {
        animate(setHowInvestImg, investImg[0]);
      }
      // if (!section0Class) {
      //   animate(setSection0Class, section0[0]);
      // }
      // if (!section1Class) {
      //   animate(setSection1Class, section1[0]);
      // }
      // if (!section2Class) {
      //   animate(setSection2Class, section2[0]);
      // }
      // if (!section3Class) {
      //   animate(setSection3Class, section3[0]);
      // }
    })
  }, [])


  return (
    <HowInvestNewStyled id="howInvest">
      <HowInvestHeading className={`investHeading ${headingClass ? 'animate' : ''}`}>
        {content.howInvest.mainHeading[0]}
        <span>{content.howInvest.mainHeading[1]}</span>
      </HowInvestHeading>
      <CarouselSection className={`investImg ${howInvestImg ? 'animate' : ''}`}>
        <img src="/assets/images/home/howInvest/greyImage.png" className={`investImg ${howInvestImg ? 'animate' : ''}`} />
        <HowInvestCarousel content={content} />
        <img src="/assets/images/home/howInvest/greyImage.png" className={`investImg ${howInvestImg ? 'animate' : ''}`} />
      </CarouselSection>
    </HowInvestNewStyled>
  )
}

export default HowInvestNew