import Head from 'next/head'
import { HomeStyled, UpArrow } from '@/styles/pages/Home.styled'
import TopSection from '@/components/home/TopSection'
import About from '@/components/home/About'
import WhyChoose from '@/components/home/WhyChoose'
import HowInvestNew from '@/components/home/HowInvestNew'
import IncomeSources from '../components/home/IncomeSources'
import MatchingIncome from '@/components/home/MatchingIncome'
import Press from '@/components/home/Press'
import PressCarousel from '@/components/home/PressCarousel'
import FAQs from '@/components/home/FAQs'
import AboutDivider from '@/components/home/dividers/AboutDivider'
import HowInvestDivider from '@/components/home/dividers/HowInvestDiveder'
import WhyChooseDivider from '@/components/home/dividers/WhyChooseDivider'
import IncomeSourcesDivider from '@/components/home/dividers/IncomeSourcesDivider'
import MatchingIncomeDivider from '@/components/home/dividers/MatchingIncomeDivider'
import PressDivider from '@/components/home/dividers/PressDivider'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import { CONTENT } from '@/content/content';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // @ts-ignore
            behavior: 'instant'
        })
    }, [])

    return (
        <>
            <Head>
                <title>Trontrx</title>
                <meta name="TronTrx" content="TronTrx - King Of All Contracts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeStyled>
                <>
                    <Navbar />
                    <TopSection content={CONTENT} />
                    {/* <ContractStats content={content} /> */}
                    <About content={CONTENT} />
                    <AboutDivider />
                    <WhyChoose content={CONTENT} />
                    <WhyChooseDivider />
                    <IncomeSources content={CONTENT} />
                    <IncomeSourcesDivider />
                    <MatchingIncome content={CONTENT} />
                    <MatchingIncomeDivider />
                    {/* <HowInvest content={content} /> */}
                    <HowInvestNew content={CONTENT} />
                    <HowInvestDivider />
                    {/* <Press /> */}
                    <PressCarousel />
                    {/* <PressDivider />
                    <FAQs content={CONTENT} /> */}
                    <Footer />
                    <UpArrow onClick={() => window.scrollTo(0, 0)}>
                        <img id="upArrow" src="assets/images/home/arrow-up.png" alt="..." />
                    </UpArrow>
                </>
            </HomeStyled>
        </>
    )
}

export default Home
