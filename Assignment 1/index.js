function sumAsync(num1, num2, callback) {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 1000);
}

// Example usage:
sumAsync(5, 7, (result) => {
  console.log(result); // Output: 12
});
