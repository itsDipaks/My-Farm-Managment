const express = require("express");
const {Database} = require("./src/Config/db");
const app = express();

app.use(express.json());


app.listen(8100, async () => {
  try {
    console.log("Server Started On http://localhost:8100");
    await Database;
    console.log("Server Connected To DB");
  } catch (err) {
    console.log(err);
  }
});
