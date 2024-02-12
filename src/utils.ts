// Example of a function to fetch user data from GitHub
import axios from 'axios';

export async function fetchUserData(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Example of a function to parse user data and extract relevant information
export function parseUserData(userData: any) {
  return {
    name: userData.name,
    location: userData.location,
    
  };
}
