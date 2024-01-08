const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server Created");
  // const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString();
  const serverInfo = {
    serverName: "Crio Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
  };
  if (req.url === "/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(serverInfo));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello from Server</h1>`);
  }
});
server.listen(8082, () => {
  console.log("Listening at 8082...");
});
