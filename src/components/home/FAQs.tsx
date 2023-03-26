import { FAQsStyled, TabsContainer, TabHeaders, TabHeader, TabBodies, TabBody, Accordion, AccordionTop, AccordionBottom } from "@/styles/pages/components/home/FAQs.styled"
import { useState, useEffect } from "react"


const FAQs = ({ content }: any) => {
    const [tabClass, setTabClass] = useState(1);
    const [answerClass, setAnswerClass] = useState(1);

    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.innerWidth <= 1200 && window.innerWidth > 992) {
                if (window.scrollY >= 4300 && window.scrollY <= 4410) {
                    setAnimateClass(true);
                } else if (window.scrollY < 4300) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth <= 992) {
                if (window.scrollY >= 5000 && window.scrollY <= 5110) {
                    setAnimateClass(true);
                } else if (window.scrollY < 5000) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth > 1200) {
                if (window.scrollY >= 3600 && window.scrollY <= 3710) {
                    setAnimateClass(true);
                } else if (window.scrollY < 3600) {
                    setAnimateClass(false);
                }
            }
        })
    }, [])

    const toggleTab = (index: number) => {
        setTabClass(index);
        setAnswerClass(1);
    }

    const toggleAnswer = (index: number) => {
        setAnswerClass(index);
    }

    return (
        <FAQsStyled id="faqs">
            <h1 className={animateClass ? 'animate' : ''}>{content.faqs.mainHeading}</h1>
            <TabsContainer>
                <TabHeaders className={animateClass ? 'animate' : ''}>
                    <TabHeader onClick={() => toggleTab(1)} className={tabClass === 1 ? "active" : ""}>{content.faqs.tabs[0].title}</TabHeader>
                    <TabHeader onClick={() => toggleTab(2)} className={tabClass === 2 ? "active" : ""}>{content.faqs.tabs[1].title}</TabHeader>
                    <TabHeader onClick={() => toggleTab(3)} className={tabClass === 3 ? "active" : ""}>{content.faqs.tabs[2].title}</TabHeader>
                    <TabHeader onClick={() => toggleTab(4)} className={tabClass === 4 ? "active" : ""}>{content.faqs.tabs[3].title}</TabHeader>
                    <TabHeader onClick={() => toggleTab(5)} className={tabClass === 5 ? "active" : ""}>{content.faqs.tabs[4].title}</TabHeader>
                </TabHeaders>
                <TabBodies>

                    {/* General Tab */}
                    <TabBody className={tabClass === 1 ? "active" : ""}>
                        {content.faqs.tabs[0].questionAnswers.map((item: any, index: number) => (
                            <Accordion key={index} id={`question${index}`} className={animateClass ? 'animate' : ''}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)} className={answerClass === index + 1 ? "active" : ""}>
                                    <img src="/assets/images/home/faqs/plus.svg" alt="..." />
                                    <h2>{item.question}</h2>
                                    <img src="/assets/images/home/faqs/chevron-up.svg" alt="..." />
                                    <img src="/assets/images/home/faqs/chevron-down.svg" alt="..." />
                                </AccordionTop>
                                <AccordionBottom className={answerClass === index + 1 ? "active" : ""}>
                                    <p>{item.answer}</p>
                                    <div></div>
                                </AccordionBottom>
                            </Accordion>
                        ))}
                    </TabBody>

                    {/* Pre ICO Tab */}
                    <TabBody className={tabClass === 2 ? "active" : ""}>
                        {content.faqs.tabs[1].questionAnswers.map((item: any, index: number) => (
                            <Accordion key={index}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)} className={answerClass === index + 1 ? "active" : ""} >
                                    <img src="/assets/images/home/faqs/plus.svg" alt="..." />
                                    <h2>{item.question}</h2>
                                    <img src="/assets/images/home/faqs/chevron-up.svg" alt="..." />
                                    <img src="/assets/images/home/faqs/chevron-down.svg" alt="..." />
                                </AccordionTop>
                                <AccordionBottom className={answerClass === index + 1 ? "active" : ""}>
                                    <p>{item.answer}</p>
                                    <div></div>
                                </AccordionBottom>
                            </Accordion>
                        ))}
                    </TabBody>

                    {/* Token Tab */}
                    <TabBody className={tabClass === 3 ? "active" : ""}>
                        {content.faqs.tabs[2].questionAnswers.map((item: any, index: number) => (
                            <Accordion key={index}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)} className={answerClass === index + 1 ? "active" : ""}>
                                    <img src="/assets/images/home/faqs/plus.svg" alt="..." />
                                    <h2>{item.question}</h2>
                                    <img src="/assets/images/home/faqs/chevron-up.svg" alt="..." />
                                    <img src="/assets/images/home/faqs/chevron-down.svg" alt="..." />
                                </AccordionTop>
                                <AccordionBottom className={answerClass === index + 1 ? "active" : ""}>
                                    <p>{item.answer}</p>
                                    <div></div>
                                </AccordionBottom>
                            </Accordion>
                        ))}
                    </TabBody>

                    {/* Client Tab */}
                    <TabBody className={tabClass === 4 ? "active" : ""}>
                        {content.faqs.tabs[3].questionAnswers.map((item: any, index: number) => (
                            <Accordion key={index}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)} className={answerClass === index + 1 ? "active" : ""}>
                                    <img src="/assets/images/home/faqs/plus.svg" alt="..." />
                                    <h2>{item.question}</h2>
                                    <img src="/assets/images/home/faqs/chevron-up.svg" alt="..." />
                                    <img src="/assets/images/home/faqs/chevron-down.svg" alt="..." />
                                </AccordionTop>
                                <AccordionBottom className={answerClass === index + 1 ? "active" : ""}>
                                    <p>{item.answer}</p>
                                    <div></div>
                                </AccordionBottom>
                            </Accordion>
                        ))}
                    </TabBody>

                    {/* Legal Tab */}
                    <TabBody className={tabClass === 5 ? "active" : ""}>
                        {content.faqs.tabs[4].questionAnswers.map((item: any, index: number) => (
                            <Accordion key={index}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)} className={answerClass === index + 1 ? "active" : ""}>
                                    <img src="/assets/images/home/faqs/plus.svg" alt="..." />
                                    <h2>{item.question}</h2>
                                    <img src="/assets/images/home/faqs/chevron-up.svg" alt="..." />
                                    <img src="/assets/images/home/faqs/chevron-down.svg" alt="..." />
                                </AccordionTop>
                                <AccordionBottom className={answerClass === index + 1 ? "active" : ""}>
                                    <p>{item.answer}</p>
                                    <div></div>
                                </AccordionBottom>
                            </Accordion>
                        ))}
                    </TabBody>

                </TabBodies>
            </TabsContainer>
        </FAQsStyled>
    )
}

export default FAQs