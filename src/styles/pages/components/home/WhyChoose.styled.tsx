import styled from 'styled-components'


export const WhyChooseStyled = styled.section`
    padding-top: 53px;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 44.8px;
        line-height: 114.5%;
        /* or 51px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;

        margin-bottom: 20px;

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }

`

export const Sections = styled.div`
    position: relative;
    min-height: 670px;

    > img {
        position: absolute;
        top: 26.8%;
        left: 50%;
        transform: translateX(-50%);
    }

    > img#main1 {
        width: 266.32px;
        height: 251px;
        z-index: 1;
    }

    > img#main2 {
        width: 244.2px;
        height: 230.16px;
        top: 28.5%;
        z-index: 2;
    }

    > img#main3 {
        top: 36.5%;
        z-index: 3;
    }

    > img#main4 {
        top: 43.5%;
        z-index: 4;
    }

    > div {
        position: absolute;
        top: 26.8%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        width: 266.32px;
        height: 251px;
    }

    #longevityImg2 {
        position: absolute;
        bottom: -78px;
        left: 107px;
    }
`

export const Section = styled.div`
    position: absolute;
    display: flex;
    text-align: center;

    left: -150%;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22.4px;
        line-height: 114.5%;
        /* or 26px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-bottom: 3px;
    }

    > div {
        margin-bottom: 5px;
    }

    > div div p {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    > img {
        width: 88px;
        height: 88px;
    }

    &#whySection0 {
        top: -73%;
        left: 50%;
        transform: translateX(-50%);

        flex-direction: column;
        align-items: center;
        width: 160%;
    }

    &#whySection1 {
        top: 2%;
        left: 97%;

        flex-direction: row-reverse;
        align-items: center;
        gap: 5px;
        width: 160%;

        p {
            text-align: left;
        }
    }

    &#whySection2 {
        top: 65%;
        left: 96%;

        flex-direction: row-reverse;
        align-items: center;
        gap: 5px;
        width: 193%;

        > div {
            margin-bottom: -15px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            text-align: left;
        }
    }


    &#whySection3 {
        left: 50%;
        top: 102%;
        transform: translateX(-50%);

        flex-direction: column-reverse;
        align-items: center;
        width: 160%;
    }


    &#whySection4 {
        top: 61%;
        left: -147%;

        flex-direction: row;
        align-items: center;
        gap: 5px;
        width: 150%;

        p {
            text-align: left;
        }
    }

    &#whySection5 {
        top: 0;
        left: -155%;

        flex-direction: row;
        align-items: center;
        gap: 5px;
        width: 158%;

        p {
            text-align: left;
        }
    }
`

export const HR = styled.div`
    position: relative;

    img:first-child {
        width: 100%;
    }

    img:last-child {
        height: 34.68px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`