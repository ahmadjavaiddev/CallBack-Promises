async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Example usage:
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(url).then((data) => {
  console.log(data);
});
