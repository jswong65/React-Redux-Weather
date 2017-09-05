import axios from 'axios';

const API_KEY = '4afd0f49e69e7cd96094d20e36c938b2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // request is a promise object, not the real data
    payload: request
  };
}
