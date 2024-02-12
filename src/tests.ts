import { fetchUserData, parseUserData } from './utils';

describe('fetchUserData', () => {
  it('fetches user data from GitHub API', async () => {
    const userData = await fetchUserData('example_user');
    expect(userData).toBeDefined();
  });
});

describe('parseUserData', () => {
  it('parses user data and extracts relevant information', () => {
    const userData = { name: 'John Doe', location: 'New York', /* other fields */ };
    const parsedData = parseUserData(userData);
    expect(parsedData.name).toBe('John Doe');
    expect(parsedData.location).toBe('New York');
  });
});
