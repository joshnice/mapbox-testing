// server.mjs
const createServer = require("http").createServer;
const url = require("url");
const readFile = require("./file-helpers").readFile;

const server = createServer(async (req, res) => {
  const pathname = url.parse(req.url).pathname;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allowed headers

  // Preflight request handling
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No content
    res.end();
    return;
  }

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
