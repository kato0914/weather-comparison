import { WeatherData } from '../types';

export const fetchWeatherData = async (locationId: string): Promise<WeatherData> => {
  // ここで実際のAPI呼び出しを行います
  // この例ではモックデータを返しています
  return {
    'Yahoo天気': [
      { date: '2023-05-01', maxTemp: 25, minTemp: 18, rainProbability: 30, iconUrl: 'path/to/icon', weatherDescription: '晴れ' },
      // 他の日のデータ...
    ],
    'ウェザーニューズ': [
      { date: '2023-05-01', maxTemp: 26, minTemp: 17, rainProbability: 20, iconUrl: 'path/to/icon', weatherDescription: '晴れ' },
      // 他の日のデータ...
    ],
    // 他の天気サービスのデータ...
  };
};