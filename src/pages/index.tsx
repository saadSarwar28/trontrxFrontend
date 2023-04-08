import Head from 'next/head'
import { useEffect } from 'react'
import { HomeStyled, UpArrow } from '@/styles/pages/Home.styled'
import { connect } from 'react-redux'
import { getContent } from '@/store/actions/homeActions'
import TopSection from '@/components/home/TopSection'
import ContractStats from '@/components/home/ContractStats'
import About from '@/components/home/About'
import WhyChoose from '@/components/home/WhyChoose'
// import HowInvest from '@/components/home/HowInvest'
import HowInvestNew from '@/components/home/HowInvestNew'
import IncomeSources from '../components/home/IncomeSources'
import MatchingIncome from '@/components/home/MatchingIncome'
import Press from '@/components/home/Press'
import FAQs from '@/components/home/FAQs'
import AboutDivider from '@/components/home/dividers/AboutDivider'
import HowInvestDivider from '@/components/home/dividers/HowInvestDiveder'
import WhyChooseDivider from '@/components/home/dividers/WhyChooseDivider'
import IncomeSourcesDivider from '@/components/home/dividers/IncomeSourcesDivider'
import MatchingIncomeDivider from '@/components/home/dividers/MatchingIncomeDivider'
import PressDivider from '@/components/home/dividers/PressDivider'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'


const Home = ({ content, getContent }: any) => {
  useEffect(() => {
    getContent();
  }, [])

  return (
    <>
      <Head>
        <title>Trontrx</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        {Object.keys(content).length && (
          <>
            <Navbar />
            <TopSection content={content} />
            {/* <ContractStats content={content} /> */}
            <About content={content} />
            <AboutDivider />
            {/* <HowInvest content={content} /> */}
            <HowInvestNew content={content} />
            <HowInvestDivider />
            <WhyChoose content={content} />
            <WhyChooseDivider />
            <IncomeSources content={content} />
            <IncomeSourcesDivider />
            <MatchingIncome content={content} />
            <MatchingIncomeDivider />
            <Press />
            <PressDivider />
            <FAQs content={content} />
            <Footer />
            <UpArrow onClick={() => window.scrollTo(0, 0)}>
              <img id="upArrow" src="assets/images/home/arrow-up.png" alt="..." />
            </UpArrow>
          </>
        )}
      </HomeStyled>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    content: state.home.homeItems
  }
}

export default connect(mapStateToProps, { getContent })(Home)
