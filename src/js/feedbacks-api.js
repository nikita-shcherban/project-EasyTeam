import { BASE_URL, ENDPOINTS } from './constants.js';

export async function getFeedbacks(limit = 10, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.feedbacks}?limit=${limit}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch feedbacks: ${response.status}`);
    }

    const data = await response.json();
    return data.feedbacks;
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    throw error;
  }
}
