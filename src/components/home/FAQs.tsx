import { FAQsStyled, TabsContainer, TabHeaders, TabHeader, TabBodies, TabBody, Accordion, AccordionTop, AccordionBottom } from "@/styles/pages/components/home/FAQs.styled"
import { useState, useEffect } from "react"
import MovingLines from "./MovingLines";


const FAQs = ({ content }: any) => {
    // animation
    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 100) {
            setAnimationClass(false);
        }
    }
    const [faqsHeadingClass, setFaqsHeadingClass] = useState(false);
    const [tabHeadersClass, setTabHeadersClass] = useState(false);
    // general
    const [question1Class, setQuestion1Class] = useState(false);
    // pre ico
    const [question2Class, setQuestion2Class] = useState(false);
    // token
    const [question3Class, setQuestion3Class] = useState(false);
    // client
    const [question4Class, setQuestion4Class] = useState(false);
    // legal
    const [question5Class, setQuestion5Class] = useState(false);
    useEffect(() => {
        const faqsHeading = document.querySelectorAll('.faqsHeading');
        const tabHeaders = document.querySelectorAll('.tabHeaders');
        const question1 = document.querySelectorAll('.question1');
        const question2 = document.querySelectorAll('.question2');
        const question3 = document.querySelectorAll('.question3');
        const question4 = document.querySelectorAll('.question4');
        const question5 = document.querySelectorAll('.question5');
        document.addEventListener('scroll', () => {
            if (!faqsHeadingClass) {
                animate(setFaqsHeadingClass, faqsHeading[0]);
            }
            if (!tabHeadersClass) {
                animate(setTabHeadersClass, tabHeaders[0]);
            }
            if (!question1Class) {
                animate(setQuestion1Class, question1[0]);
            }
            if (!question2Class) {
                animate(setQuestion2Class, question2[0]);
            }
            if (!question3Class) {
                animate(setQuestion3Class, question3[0]);
            }
            if (!question4Class) {
                animate(setQuestion4Class, question4[0]);
            }
            if (!question5Class) {
                animate(setQuestion5Class, question5[0]);
            }
        })
    })

    const [tabClass, setTabClass] = useState(1);
    const [answerClass, setAnswerClass] = useState(1);
    const toggleTab = (index: number) => {
        setTabClass(index);
        setAnswerClass(1);
    }
    const toggleAnswer = (index: number) => {
        setAnswerClass(index);
    }

    return (
        <FAQsStyled id="faqs">
            <h1 className={`faqsHeading ${faqsHeadingClass ? 'animate' : ''}`}>
                {content.faqs.mainHeading}
            </h1>
            <TabsContainer>
                <TabHeaders className={`tabHeaders ${tabHeadersClass ? 'animate' : ''}`}>
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
                            <Accordion key={index} className={`question1 ${question1Class ? 'animate' : ''}`}>
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
                            <Accordion key={index} className={`question2 ${question2Class ? 'animate' : ''}`}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)}>
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
                            <Accordion key={index} className={`question3 ${question3Class ? 'animate' : ''}`}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)}>
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
                            <Accordion key={index} className={`question4 ${question4Class ? 'animate' : ''}`}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)}>
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
                            <Accordion key={index} className={`question5 ${question5Class ? 'animate' : ''}`}>
                                <AccordionTop onClick={() => toggleAnswer(index + 1)}>
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