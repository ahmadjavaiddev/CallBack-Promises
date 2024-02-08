async function fetchMultipleData(urls) {
  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(promises);
}

// Example usage:
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleData(urls).then((responses) => {
  console.log(responses);
});
