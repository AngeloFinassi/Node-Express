import express from "express";
// create the object app
const app = express();
const port = 8080;

//it's like ncat on kali
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
