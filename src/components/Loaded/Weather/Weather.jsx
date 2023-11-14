import style from './Weather.module.scss';
import dayClearImg from '../../../../public/icon.svg';
import dayCloudsImg from '../../../../public/icon-1.svg';
import dayRainImg from '../../../../public/icon-3.svg';
import daySnowImg from '../../../../public/icon-4.svg';
import dayThunderstormImg from '../../../../public/icon-5.svg';
import nightClearImg from '../../../../public/icon-6.svg';
import nightCloudsImg from '../../../../public/icon-7.svg';
import nightRainImg from '../../../../public/icon-9.svg';
import nightSnowImg from '../../../../public/icon-10.svg';
import nightThunderstormImg from '../../../../public/icon-11.svg';

const Weather = ({ weatherData, date }) => {
  let statusDay = null
  if (date.getHours() >= 6 && date.getHours() <= 18) {
    statusDay = 'day'
  } else {
    statusDay = 'night'
  }
  const imgObj = {
    day: {
      Clear: dayClearImg,
      Snow: daySnowImg,
      Rain: dayRainImg,
      Drizzle: dayRainImg,
      Thunderstorm: dayThunderstormImg,
      Haze: dayCloudsImg,
      Mist: dayCloudsImg,
      Squall: dayCloudsImg,
      Fog: dayCloudsImg,
      Tornado: dayCloudsImg,
      Sand: dayCloudsImg,
      Ash: dayCloudsImg,
      Smoke: dayCloudsImg,
      Dust: dayCloudsImg,
      Clouds: dayCloudsImg,
    },
    night: {
      Clear: nightClearImg,
      Snow: nightSnowImg,
      Rain: nightRainImg,
      Drizzle: nightRainImg,
      Thunderstorm: nightThunderstormImg,
      Haze: nightCloudsImg,
      Mist: nightCloudsImg,
      Squall: nightCloudsImg,
      Fog: nightCloudsImg,
      Tornado: nightCloudsImg,
      Sand: nightCloudsImg,
      Ash: nightCloudsImg,
      Smoke: nightCloudsImg,
      Dust: nightCloudsImg,
      Clouds: nightCloudsImg,
    },
  };
  return (
    <section className={style.containerWeather}>
      <div className={style.containerTitle}>
        <title>Today:</title>
        <h2>{weatherData.weather[0].main}</h2>
      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={imgObj[statusDay][weatherData.weather[0].main]} alt="icon" />
      </div>
      <div className={style.dataContainer}>
        <div>
          <div className={style.containerCardData}>
            <h3>Temperature: {Math.ceil(weatherData.main.temp)}°С</h3>
          </div>
          <div className={style.containerCardData}>
            <h3>Wind Speed: {Math.ceil(weatherData.wind.speed)}M/S</h3>
          </div>
          <div className={style.containerCardData}>
            <h3>Humidity: {Math.ceil(weatherData.main.humidity)}%</h3>
          </div>
          <div className={style.containerCardData}>
            <h3>Pressure: {Math.ceil(weatherData.main.pressure)}HPa</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
