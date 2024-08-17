import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DayForecast {
  date: string;
  temperature: string;
  condition: string;
  icon: string;
}

interface ForecastSource {
  name: string;
  forecast: DayForecast[];
}

const prefectures = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
  '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const WeeklyForecast: React.FC = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState('東京都');
  const [forecastSources, setForecastSources] = useState<ForecastSource[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        setError(null);
        const newDates = Array.from({length: 7}, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          return date.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' });
        });
        setDates(newDates);

        // 実際のAPIが準備できたら、以下のコメントを解除してください
        const response = await axios.get(`/api/weather?prefecture=${selectedPrefecture}`);
        setForecastSources(response.data);
      } catch (error) {
        console.error('天気データの取得に失敗しました', error);
        setError('天気データの取得に失敗しました。しばらくしてから再度お試しください。');
      }
    };

    fetchForecastData();
  }, [selectedPrefecture]);

  return (
    <div className="weekly-forecast">
      <h2>1週間の天気予報</h2>
      <select
        value={selectedPrefecture}
        onChange={(e) => setSelectedPrefecture(e.target.value)}
      >
        {prefectures.map((pref) => (
          <option key={pref} value={pref}>{pref}</option>
        ))}
      </select>
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <table className="forecast-table">
          <thead>
            <tr>
              <th>予報元</th>
              {dates.map(date => <th key={date}>{date}</th>)}
            </tr>
          </thead>
          <tbody>
            {forecastSources.map((source) => (
              <tr key={source.name}>
                <td>{source.name}</td>
                {source.forecast.map((day, index) => (
                  <td key={index}>
                    <img src={day.icon} alt={day.condition} />
                    <div>{day.temperature}</div>
                    <div>{day.condition}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeeklyForecast;