
const apiUrl = 'https://ghibliapi.herokuapp.com/';

const ApiService = async () => {
  const response = await fetch(`${apiUrl}films`);
  if (!response.ok) {
    throw new Error(`Could not fetch ${apiUrl}films`);
  }
  const data = await response.json();
  return data;
};

export default ApiService;
