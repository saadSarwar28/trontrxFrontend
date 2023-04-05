import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { HowInvestCarouselStyled, CarouselItem } from "@/styles/pages/components/home/HowInvestCarousel.styled"
import MovingLines from "./MovingLines"


const HowInvestCarousel = ({ content }: any) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <HowInvestCarouselStyled>
            <Carousel
                afterChange={(nextSlide, { currentSlide }) => {
                    const items = document.querySelectorAll('.react-multi-carousel-item');
                    items.forEach((item) => {
                        if (!item.classList.contains('react-multi-carousel-item--active')) {
                            const iframe = item.querySelectorAll('iframe');
                            const temp = iframe[0].src;
                            iframe[0].src = '';
                            iframe[0].src = temp;
                        }
                    })
                }}
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
            >
                <CarouselItem>
                    <iframe id="howInvestIframe1" height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    <div>
                        <h2>
                            {content.howInvest.rightSections[0].title}
                            <MovingLines />
                        </h2>
                        <p>{content.howInvest.rightSections[0].desc}</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <iframe id="howInvestIframe2" height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    <div>
                        <h2>
                            {content.howInvest.rightSections[1].title}
                            <MovingLines />
                        </h2>
                        <p>{content.howInvest.rightSections[1].desc}</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <iframe id="howInvestIframe3" height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    <div>
                        <h2>
                            {content.howInvest.rightSections[2].title}
                            <MovingLines />
                        </h2>
                        <p>{content.howInvest.rightSections[2].desc}</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <iframe id="howInvestIframe4" height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    <div>
                        <h2>
                            {content.howInvest.rightSections[3].title}
                            <MovingLines />
                        </h2>
                        <p>{content.howInvest.rightSections[3].desc}</p>
                    </div>
                </CarouselItem>
            </Carousel>
        </HowInvestCarouselStyled>
    )
}

export default HowInvestCarousel