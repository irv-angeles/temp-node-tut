const http = require("http");

//createServer takes two param the request and the response
const server = http.createServer((req, res) => {
  //if request is to this url "/" then resp
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  // //if request is to this url "/about" then resp
  else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
  `);
  }
});

//tells server where to listen
server.listen(3000);
