
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export async function getAllStarships() {
  const url = 'https://swapi.dev/api/starships/';
  return fetchData(url);
}