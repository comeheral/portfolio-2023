export default async function fetchData(path){
  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });

  if(!response.ok){
    console.error('An error occurred : ' + response.statusText);
  }

  return response;
}