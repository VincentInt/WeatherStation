import { useEffect, useState } from 'react';
import './App.css';
import { setGetApi } from './api/api';
import Loaded from './components/Loaded/Loaded';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [statusPage, setStatusPage] = useState('load')

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await setGetApi();
        setWeatherData(data);
        setStatusPage('loaded')
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <main className="App">
      <div>
        {statusPage === 'loaded'? <Loaded weatherData={weatherData}/> : <h2>Загрузка</h2>}
    
      </div>
    </main>
  );
}

export default App;
