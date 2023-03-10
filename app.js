const http = require("http");

http
  .createServer(function (req, res) {
    res.write("On the way to being a full snack engineer! yipeee");
    res.end();
  })
  .listen(3000);

console.log("Server Started");
