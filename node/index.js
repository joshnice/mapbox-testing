// server.mjs
const createServer = require("http").createServer;
const url = require("url");
const readFile = require("./file-helpers").readFile;

const server = createServer(async (req, res) => {
  const pathname = url.parse(req.url).pathname;

  switch (pathname) {
    case "/style":
      res.writeHead(200, { "Content-Type": "application/json" });
      const style = await readFile("style.json");
      res.end(style);
      break;
    case "/geojson":
      res.writeHead(200, { "Content-Type": "application/json" });
      const geojson = await readFile("geojson.json");
      res.end(geojson);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found\n");
  }
});

server.listen(3000, () => {
  console.log("Node is running");
});
