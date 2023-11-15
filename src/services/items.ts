import { API_BASE_URL } from '../config/api';

const fetchItems = async () => {
  const response = await fetch(`${API_BASE_URL}/.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch items. HTTP status: ' + response.status);
  }

  return await response.json(); // Type assertion to specify the data shape Single dashboard
};

export { fetchItems };
