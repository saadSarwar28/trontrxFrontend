import styled from "styled-components"


export const SidebarDesktopStyled = styled.aside`
  width: 308px;
  min-width: 200px;
  min-height: 100vh;
  background-image: url('/assets/images/navbar/mobile-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 180%;
  background-position: center;

  > ul {
    padding-top: 137px;
    padding-left: 12px;

    display: flex;
    flex-direction: column;
    gap: 36px;

    // Active Link
    > div.active {
      a {
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
      }
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`

export const LinkStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  > img {
    width: 32.36px;
    height: 25.56px;
  }

  button {
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13.5421px;
    line-height: 18px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
  }
`
