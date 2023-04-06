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

  useEffect(() => {
    const headingDesktop = document.querySelectorAll('.investHeading');
    const investImg = document.querySelectorAll('.investImg');

    document.addEventListener('scroll', () => {
      if (!headingClass) {
        animate(setHeadingClass, headingDesktop[0]);
      }

      if (!howInvestImg) {
        animate(setHowInvestImg, investImg[0]);
      }
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