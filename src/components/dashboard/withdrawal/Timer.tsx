// @ts-ignore
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useTimer } from 'react-timer-hook';

const TimerBoxContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    width: 34px;
    height: 34px;
  }

  /* @media only screen and (max-width: 400px) {
    width: auto;
  } */
`

const TimerBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`

const TimerBox = styled.p`
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
      line-height: 23px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #FFFFFF;
      text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }

    > span {
      position: absolute; 
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);

      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 6px;
      line-height: 8px;
      text-align: center;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #FFFFFF;
      text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }
`

interface TimerInterface {
  endTs: number,
  callback: () => {}
}

// @ts-ignore
const Timer: React.FC<TimerInterface> = ({ endTs, callback }) => {

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(endTs * 1000),
    onExpire: callback,
  });

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      callback();
    }
  })

  return (
    <TimerBoxContainerWrapper>
      <img src="/assets/images/dashboard/withdrawal/timer.svg" alt="..." />
      <TimerBoxContainer>
        <TimerBox>
          <p>{days > 0 ? ((24 * days) + hours).toString().padStart(2, '0') : hours.toString().padStart(2, '0')}</p>
          <span>Hour</span>
        </TimerBox>
        <TimerBox>
          <p>{minutes.toString().padStart(2, '0')}</p>
          <span>Minutes</span>
        </TimerBox>
        <TimerBox>
          <p>{seconds.toString().padStart(2, '0')}</p>
          <span>Seconds</span>
        </TimerBox>
      </TimerBoxContainer>
    </TimerBoxContainerWrapper>
  );
};

export default Timer;
