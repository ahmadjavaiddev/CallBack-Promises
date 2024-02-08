function racePromises(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  });
}

// Example usage:
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 2 rejected"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 1500)
);

const promisesArray = [promise1, promise2, promise3];

racePromises(promisesArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
