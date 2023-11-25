window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
promises = Array.from({ length: 5 }, () => {
  const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomDelay / 1000} seconds`);
    }, randomDelay);
  });
});

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  });