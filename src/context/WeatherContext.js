import { createContext, useState, useEffect } from 'react'


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetchWeather();
  }, [])

  const fetchWeather = async () => {
    const response = await (`https://api.openweathermap.org/data/2.5/weather?lat=47.408707&lon=9.620293&appid=f165aa50e5acf749fcc4e89042ce734c`);
    const data = await response.json();

    setWeather(data);
    setIsLoading(false);
  }

  return (
    <WeatherContext.Provider
      value={{
        weather,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}



export default WeatherContext;