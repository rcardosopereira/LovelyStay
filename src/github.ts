// github.ts
import fetch from 'node-fetch';

export async function fetchUserFromGithub(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user from GitHub: ${response.statusText}`);
  }
  const userData = await response.json();
  return {
    name: userData.name || 'Unknown',
    location: userData.location || 'Unknown'
  };
}

export async function getUserLanguages(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user's repositories from GitHub: ${response.statusText}`);
  }
  const reposData = await response.json();
  const languages = reposData.map(repo => repo.language);
  return languages.filter(language => language);
}
