export const setGetApi = async () => {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=45.0352718&lon=38.9764814&appid=aa78c371f61da4559495da8ca2eeca61&units=metric';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
 
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};
