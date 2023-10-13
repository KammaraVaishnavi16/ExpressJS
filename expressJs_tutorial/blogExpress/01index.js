const express = require("express");
const exphbs = require("express-handlebars");

const path = require("path");
const port = 3000;
const app = express();

const hbs = exphbs.create(); // Creating an instance of express-handlebars

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));

app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`The blog is listening at http://localhost:${port}`);
});
