import style from './Gradient.module.scss';
import { useEffect, useState } from 'react';

const Gradient = ({weatherStatus}) => {
  const [gradient, setGradient] = useState(null)

  const gradientWeather = () =>{
    if (weatherStatus === 'Clear') {
      return setGradient({background: `rgb(0,26,255)`,
      background: `linear-gradient(48deg, rgba(0,26,255,1) 0%, rgba(220,255,251,1) 84%, rgba(252,255,255,1) 100%)`})
    } 
    return setGradient(  {background: `rgb(255,255,255)`,
    background: `linear-gradient(48deg, rgba(255,255,255,1) 0%, rgba(64,66,77,1) 52%, rgba(17,24,39,1) 100%)`})
  }
  useEffect(()=>{
    gradientWeather()
  },[weatherStatus])
  return <div style={gradient} className={style.gradient} />;
};

export default Gradient;
