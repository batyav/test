import React from 'react';
// import Countdown, { CountdownRenderProps } from 'react-countdown-now';
import Countdown, { CountdownRenderProps } from 'react-countdown';


interface RendererProps extends CountdownRenderProps {}

const countdownDate = new Date('February 18, 2024 23:00:00 UTC').getTime();

const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
  if (completed) {
    return <span>Public sale is right now!</span>;
  } else {
    return (
      <span>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </span>
    );
  }
};

const CountdownTimer: React.FC = () => {
  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownTimer;
