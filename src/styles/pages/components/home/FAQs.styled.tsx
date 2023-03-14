import styled from "styled-components"


export const FAQsStyled = styled.section`
    padding-top: 111px;
    padding-bottom: 138px;
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
    background-color:#F1F1F1;
    

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 56px;
        line-height: 114.5%;
        /* or 64px */
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;

        margin-bottom: 35px;
    }

    @media (max-width: 1200px) {
        padding-top: 81px;
        padding-bottom: 108px;
        padding-left: calc(50% - 400px);
        padding-right: calc(50% - 400px);
    }

    @media (max-width: 992px) {
        /* padding-left: calc(50% - 350px);
        padding-right: calc(50% - 350px); */

        > h1 {
            font-size: 45px;
        }
    }
`

export const TabsContainer = styled.div`
    max-width: 1000px;

    @media (max-width: 1200px) {
        max-width: 800px;
    }

    @media (max-width: 992px) {
        max-width: 100%;
    }
`

export const TabHeaders = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #9C9C9C;
    margin: 0 30px 43px;

    @media (max-width: 992px) {
        flex-direction: column;
        margin: 0 30px 43px;
    }
`

export const TabHeader = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 114.5%;
    /* or 18px */
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkColor};
    border-bottom: 6px solid transparent;
    padding: 0 40px 20px;
    margin-bottom: -4px;
    cursor: pointer;
    transition: 300ms;

    &.active {
        color: ${({ theme }) => theme.colors.mainYellow};
        border-bottom: 6px solid ${({ theme }) => theme.colors.mainYellow};
    }
`

export const TabBodies = styled.div`
    
`

export const TabBody = styled.div`
    display: none;

    &.active {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Accordion = styled.div`
    
`

export const AccordionTop = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.whiteBg};
    padding: 15px 18px 18px;
    cursor: pointer;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 114.5%;
        /* identical to box height, or 21px */
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-left: 13px;
        margin-bottom: -16px;
    }
`

export const AccordionBottom = styled.div`
    padding: 0 43px;
    background-color: rgba(257,257,256,0.5);
    display: grid;
    align-items: center;
    overflow: hidden;
    transition: 300ms;

    &.active {
        padding: 28px 43px;
        p {
            display: block;
        }
    }

    p {
        display: none;
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 114.5%;
        /* or 18px */
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
    }
`