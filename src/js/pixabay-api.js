import axios from 'axios';
import { hideLoader } from './loader';

async function searchImages(imageTitle, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '48725247-1ad674d1a078eddb17b21f3f8';

  const params = {
    q: imageTitle,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 40,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

export default searchImages;
