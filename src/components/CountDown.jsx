import { useEffect, useState } from "react";

const CountDown = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full mx-auto font-nunito font-bold text-5xl">
      <div className="flex gap-4 justify-center items-center pt-16">
        <div className="text-center bg-black p-4 rounded-xl text-white">
          <div>{remainingTime.days}</div>
          <div>Days</div>
        </div>
        :
        <div className="text-center bg-black p-4 rounded-xl text-white">
          <div>{remainingTime.hours}</div>
          <div>Hours</div>
        </div>
        :
        <div className="text-center bg-black p-4 rounded-xl text-white">
          <div>{remainingTime.minutes}</div>
          <div>Minutes</div>
        </div>
        :
        <div className="text-center bg-black p-4 rounded-xl text-white">
          <div>{remainingTime.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
