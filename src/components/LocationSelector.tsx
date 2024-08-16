import React from 'react';
import { Location } from '../types';

interface Props {
  onLocationChange: (location: Location) => void;
}

const locations: Location[] = [
  { id: 'tokyo', name: '東京' },
  { id: 'osaka', name: '大阪' },
  { id: 'fukuoka', name: '福岡' },
  // 他の都市を追加
];

const LocationSelector: React.FC<Props> = ({ onLocationChange }) => {
  return (
    <select onChange={(e) => {
      const selected = locations.find(loc => loc.id === e.target.value);
      if (selected) onLocationChange(selected);
    }}>
      {locations.map(location => (
        <option key={location.id} value={location.id}>
          {location.name}
        </option>
      ))}
    </select>
  );
};

export default LocationSelector;