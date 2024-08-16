import React from 'react';
import { WeatherData, DayForecast } from '../types';

interface Props {
  data: WeatherData;
}

const WeatherDisplay: React.FC<Props> = ({ data }) => {
  return (
    <div className="weather-display">
      {Object.entries(data).map(([service, forecast]) => (
        <div key={service} className="weather-service">
          <h2>{service}</h2>
          {(forecast as DayForecast[]).map((day, index) => (
            <div key={index} className="weather-day">
              <p>日付: {day.date}</p>
              <p>最高気温: {day.maxTemp}°C</p>
              <p>最低気温: {day.minTemp}°C</p>
              <p>降水確率: {day.rainProbability}%</p>
              <img src={day.iconUrl} alt={day.weatherDescription} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;