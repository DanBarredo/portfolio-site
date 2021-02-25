const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use(express.static("js"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
