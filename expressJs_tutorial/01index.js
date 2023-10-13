//instead of using node js, the efficient way is using expressJS
// because it reduces of using most of if-else statements.

import express from "express";
import path from "path";

// If you are using ECMAScript modules, you need to use import.meta.url to get the current module's URL and then convert it to a file path:
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// const path = path();

const port = process.env.port || 3000;

//app.use() is a express middleware, which stores/keeps the request and response objects access and they can modify
app.use(express.static(path.join(__dirname, "public")));

// we can also create our own middlewares
// const vaishnavi = (req, res, next) => {
//   console.log(req);
// };
// app.use(vaishnavi);

app.get("/hello/:name", (req, res) => {
  res.send(`Hello world ${req.params.name}`);
});
app.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "01index.html"));
  res.json({ name: "vaishnavi", age: 21 });
});
app.listen(port, () => {
  console.log(`The server is running on port http://localhost:${port}`);
});

//to create api's install thunder client in vs code extension
//thunder is similar to postman, we can also use postman instead of thunder client
