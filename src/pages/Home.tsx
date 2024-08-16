import React, { useState } from 'react';
import LocationSelector from '../components/LocationSelector';
import WeatherDisplay from '../components/WeatherDisplay';
import { Location, WeatherData } from '../types';
import { fetchWeatherData } from '../services/weatherService';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleLocationChange = async (location: Location) => {
    const data = await fetchWeatherData(location.id);
    setWeatherData(data);
  };

  return (
    <div>
      <LocationSelector onLocationChange={handleLocationChange} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default Home;