
const API= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI1MGE2NzAwYjgyZjAwMWExZTUwZmMiLCJpYXQiOjE2NjMzNzE4Nzl9.IqRgLmpC8TwY5Qj2JURWZ-1apa-vc8gumTQCqFdNFo4"
const URL = `https://coding-challenge-api.aerolab.co/products?token=${API}`

const getData = async (id) => {
  const apiURL = id ? `${URL}${id}` : URL;

  try 
   {
      const response = await fetch(apiURL);
      const data = response.json();
      return data;
  } catch(error) 
  {
      console.log('Fetch Error.', error);
  };
  
};

export default getData
