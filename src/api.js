const url = "https://rickandmortyapi.com/api/character/";


let getData = fetch(url).then(
  (resp) => {
    if (resp.ok) {
      return resp.json();
    }
  }
).then(
  (data) => {
    return data.results;
  }
);

export default getData;