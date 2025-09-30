import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = ""

app.use(express.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next){
  bandName = req.body["street"] + req.body["pet"]
  next()
}

//roda toda vez
// app.use(bandNameGenerator)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

//so roda bandgenerator quando o post é chamado
app.post("/submit", bandNameGenerator, (req, res) => {
  res.send(`<h1>This is your band name:</h1><h2>${bandName}✌️</h2>`)
})
