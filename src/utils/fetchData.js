// API URL : https://api.comeheral.fr
// API token : ZXiSO4Tx1LEHwLHhEI6nTieuRtVurQVP

export default async function fetchData(path){
  let response = await fetch('https://api.comeheral.fr' + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ZXiSO4Tx1LEHwLHhEI6nTieuRtVurQVP'
    }
  });

  if(!response.ok){
    console.error('An error occurred : ' + response.statusText);
  }

  return response;
}