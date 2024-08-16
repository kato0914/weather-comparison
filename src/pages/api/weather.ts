import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prefecture } = req.query;

  try {
    const yahooForecast = await scrapeYahooWeather(prefecture as string);
    const weatherNewsForecast = await scrapeWeatherNews(prefecture as string);

    res.status(200).json([
      { name: 'Yahoo天気', forecast: yahooForecast },
      { name: 'ウェザーニュース', forecast: weatherNewsForecast },
    ]);
  } catch (error) {
    res.status(500).json({ error: '天気データの取得に失敗しました' });
  }
}

async function scrapeYahooWeather(prefecture: string): Promise<string> {
  // Yahoo天気のスクレイピングロジックをここに実装
  // 仮の実装として、固定の文字列を返します
  return `${prefecture}の天気予報（Yahoo天気）`;
}

async function scrapeWeatherNews(prefecture: string): Promise<string> {
  // ウェザーニュースのスクレイピングロジックをここに実装
  // 仮の実装として、固定の文字列を返します
  return `${prefecture}の天気予報（ウェザーニュース）`;
}