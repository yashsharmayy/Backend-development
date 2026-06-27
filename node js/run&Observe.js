const fs = require("fs");

console.log("1. start of script");

// synchronous (blocking) operation

console.log("2. Reading file synchronously");
const dataSync = fs.readFileSync("user-details.txt", "utf8");
console.log("3.synchronous read complete");

// Asynchronous (non-blocking) operation
console.log("4. Reading file asynchronously");
fs.readFile("user-details.txt", "utf8", (err, dataAsync) => {
  if (err) throw err;
  console.log("6. Asynchronous read complete");
});
console.log("5. End of script");

//output:
// console.log("1. start of script");
// console.log("2. Reading file synchronously");
// console.log("3.synchronous read complete");
// console.log("4. Reading file asynchronously");
// console.log("6. Asynchronous read complete");
// console.log("5. End of script");

console.log("1. Start of script");

// Microtask queue (Promise)
Promise.resolve().then(() => console.log("2. Microtask 1"));

// Timer queue
setTimeout(() => console.log("3. Timer 1"), 0);

// I/O queue
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operation"));

// Check queue
setImmediate(() => console.log("5. Immediate 1"));

// Close queue
process.on("exit", (code) => {
  console.log("6. Exit event");
});

console.log("7. End of script");

//output:
// 1. Start of script
// 7. End of script
// 2. Microtask 1
// 3. Timer 1
// 5. Immediate 1
// 4. I/O operation
// 6. Exit event
