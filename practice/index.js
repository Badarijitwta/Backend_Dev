// console.log("Hello from Server");
// console.log("This is 3000");

const http = require("http");

// const server = http.createServer(() => {
//   console.log("Hello from Server");
// });

//Request and Response usage in http module
const server = http.createServer((req, res) => {
  // console.log("Server Created");
  res.end("Did it Biyatch");
});
server.listen(8082, () => {
  console.log("Listening...");
});
