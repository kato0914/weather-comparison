import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prefecture } = req.query;

  if (!prefecture || typeof prefecture !== 'string') {
    return res.status(400).json({ error: '都道府県が指定されていません' });
  }

  try {
    const yahooForecast = await scrapeYahooWeather(prefecture);
    const weatherNewsForecast = await scrapeWeatherNews(prefecture);

    res.status(200).json([
      { name: 'Yahoo天気', forecast: yahooForecast },
      { name: 'ウェザーニュース', forecast: weatherNewsForecast },
    ]);
  } catch (error) {
    console.error('APIエラー:', error);
    res.status(500).json({ error: '天気データの取得に失敗しました' });
  }
}

async function scrapeYahooWeather(prefecture: string): Promise<string> {
  try {
    const url = `https://weather.yahoo.co.jp/weather/jp/${prefecture}/`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const forecast = $('.forecastCity').first().text().trim();
    return forecast || `${prefecture}の天気予報を取得できませんでした`;
  } catch (error) {
    console.error('Yahoo天気のスクレイピングエラー:', error);
    return `${prefecture}の天気予報（Yahoo天気）の取得に失敗しました`;
  }
}

async function scrapeWeatherNews(prefecture: string): Promise<string> {
  try {
    const url = `https://weathernews.jp/onebox/${prefecture}/`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const forecast = $('.weather-now__text').first().text().trim();
    return forecast || `${prefecture}の天気予報を取得できませんでした`;
  } catch (error) {
    console.error('ウェザーニュースのスクレイピングエラー:', error);
    return `${prefecture}の天気予報（ウェザーニュース）の取得に失敗しま��た`;
  }
}