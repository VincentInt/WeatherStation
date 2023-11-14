import Gradient from './Gradient/Gradient.jsx'
import DataLocate from './DataLocate/DataLocate.jsx'
import Weather from './Weather/Weather.jsx'
import { useState } from 'react';

const Loaded = ({weatherData}) => {
  const [date, setDate] = useState(new Date());
  
  return (
    <>
    <title>Wather Station INT</title>
    <Gradient weatherStatus={weatherData.weather[0].main} />
    <DataLocate date={date}  setDate={setDate}  city={weatherData.name}/>
    <Weather date={date}  weatherData={weatherData}/>
    </>
  );
};

export default Loaded;