const { data } = require("../response.json");
const http = require("http");
const PORT = 8082;

const server = http.createServer((req, res) => {
  console.log("Server Created");
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>Currency Database</h1>`);
      break;
    case `/currencies/${symbol}`:
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify(
          data.filter((item) => item.id.toLowerCase() === symbol.toLowerCase())
        )
      );
      break;
    case "/currencies":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end("NOt FounD");
  }
});
server.listen(PORT, () => {
  console.log("Listening at", PORT);
});
