const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 2) for serving static files :-
app.use(express.static(path.join(__dirname, "static")));

// 1) how to send html in express
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    // const params = {};
    // res.status(200).render("index.html", params);
});

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
