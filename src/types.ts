export interface WeatherDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  iconUrl: string;
  weatherDescription: string;
}

export interface DayForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  iconUrl: string;
  weatherDescription: string;
}

export interface WeatherData {
  [service: string]: WeatherDay[];
}

export interface Location {
  id: string;
  name: string;
}