const http = require("http");
const getUsers = require("./modules/users.js");

const port = 3003;
const hostname = "http://localhost:3003";

const server = http.createServer((request, response) => {
  const url = new URL(request.url, hostname);
  const userName = url.searchParams.has("hello");


  if (userName) {
    const value = url.searchParams.get("hello");
    console.log(value);
    if (!value) {
      response.statusCode = 500;
      response.statusMessage = "Server Error";
      response.setHeader("Content-Type", "text/plain");
      response.write("Enter a name");
      response.end();
      return;
    }
    response.statusCode = 200;
    response.statusMessage = "ok";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello,${value}`);
    response.end();
    return;
  }
  switch (request.url) {
    case "/users":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "application/json");
      response.write(getUsers());
      response.end();
      break;

    case "/":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "text/plain");
      response.write("Hello world");
      response.end();
      break;

    default:
      response.statusCode = 500;
      response.statusMessage = "Server Error";
      response.setHeader("Content-Type", "text/plain");
      response.write("Invalid request");
      response.end();
      break;
  }
});

server.listen(port, () => {
  console.log(`Сервер запущен по адресу ${hostname}/`);
});


