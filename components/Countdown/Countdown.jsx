import React, {useState, useEffect} from 'react';
import './Countdown.css';
import Image from 'next/image'

// set to the start of the hackathon for now, change to registiration deadline
const COUNTDOWN_TARGET = new Date("2024-04-05 23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  return {days , hours, mins}; 
} 

const Countdown = () => { 
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
 
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft();
      handleValueChange('days', newTimeLeft.days !== timeLeft.days);
      handleValueChange('hours', newTimeLeft.hours !== timeLeft.hours);
      handleValueChange('mins', newTimeLeft.mins !== timeLeft.mins);
      setTimeLeft(getTimeLeft())
    }, 1000);
     
    return() => {
      clearInterval(timer);
    }
  }, [])


  const handleValueChange = (label) => {
    const valueElement = document.getElementById(`${label}-value`);
    if (valueElement) {
      valueElement.classList.add('changed');
      setTimeout(() => {
        valueElement.classList.remove('changed');
      }, 600); // Adjust the duration of the animation
    }
  };

  return (
    <div className='countdown'>
      <img src="/assets/treadmill_unicorn.svg" alt="Treadmill Unicorn" className="running_unicorn" />
      
      <div className='header'>
        Registration ends in:
      </div>
      <div className='content'>
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className='box' key = {label}>
              <div className='value'>
                <span> {value} </span>
              </div>
            <span className='label'> {label} </span>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Countdown 