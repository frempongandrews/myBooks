var express = require("express");
var app = express();


app.use(express.static("build"));
app.set("views", "./build");

app.get("/api", function (req, res) {
    res.send("Hello there")
});

app.get("*", function (req, res) {
    res.sendFile(`${process.cwd()}/build/index.html`)
});

app.listen(4400, function () {
    console.log("Listening on port 4400");
});