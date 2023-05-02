// @ts-ignore
import styled from "styled-components";
import React from "react";
import {useStopwatch} from 'react-timer-hook';
import {CONSTANTS} from '@/utils/constants';

const TimerBoxContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 768px) {
    > img {
      display: none;
    }
  }
`

const TimerBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`

const TimerBox = styled.div`
  width: 37px;
  height: 31px;
  position: relative;
  margin-bottom: 15px;

  background: #FFFFFF;
  border: 2.40361px solid #FBBD18;
  box-shadow: -8.59164px 9.7372px 18.3288px rgba(0, 0, 0, 0.25), inset 0.572776px 1.71833px 9.16442px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.86388px);
  border-radius: 3.43666px;

  > p {
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18.0592px;
    /* line-height: 23px; */
    line-height: 30px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  //> span {
  //  position: absolute;
  //  bottom: -15px;
  //  left: 50%;
  //  transform: translateX(-50%);
  //
  //  font-family: 'Poppins', sans-serif;
  //  font-style: normal;
  //  font-weight: 800;
  //  font-size: 6px;
  //  line-height: 8px;
  //  text-align: center;
  //  letter-spacing: 0.15em;
  //  text-transform: uppercase;
  //  color: #FFFFFF;
  //  //text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
  //}

  @media (max-width: 768px) {
    width: 21px;
    height: 18px;

    > p {
      font-size: 10.3472px;
      line-height: 13px;
    }

    //> span {
    //  font-size: 5px;
    //  line-height: 4px;
    //  bottom: -10px;
    //}
  }
`

const Times = styled.span`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 6px !important;
  line-height: 8px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 5px !important;
  }
`

// @ts-ignore
const Timer: React.FC = () => {

    const now = new Date()
    const platformStartTimestamp = new Date(CONSTANTS.PLATFORM_START_TIMESTAMP * 1000);
    const difference = Number(now.getTime() / 1000) - (platformStartTimestamp.getTime() / 1000)
    const stopwatchOffset = new Date()

    stopwatchOffset.setSeconds(now.getSeconds() + Number(difference.toFixed(0)));

    const {seconds, minutes, hours, days} = useStopwatch({
        autoStart: true,
        offsetTimestamp: stopwatchOffset
    });

    return (
        <TimerBoxContainerWrapper>
            {/*<img src="/assets/images/dashboard/withdrawal/timer.svg" alt="..."/>*/}
            <TimerBoxContainer>
                <TimerBox style={{width: '50px'}}>
                    <p>{days.toString().padStart(2, '0')}</p>
                    <Times>Days</Times>
                </TimerBox>
                <TimerBox>
                    <p>{hours.toString().padStart(2, '0')}</p>
                    <Times>Hours</Times>
                </TimerBox>
                <TimerBox>
                    <p>{minutes.toString().padStart(2, '0')}</p>
                    <Times>Minutes</Times>
                </TimerBox>
                <TimerBox>
                    <p>{seconds.toString().padStart(2, '0')}</p>
                    <Times>Seconds</Times>
                </TimerBox>
            </TimerBoxContainer>
        </TimerBoxContainerWrapper>
    );
};

export default Timer;
