//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILove
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

var userAuth = false

function checkPassword(req, res, next){
    if (req.body["password"] === "ILove") {
        userAuth = true
    }
    next()
}

app.post("/check", checkPassword, (req, res) => {
    if (userAuth) {
        res.sendFile(__dirname + "/public/secret.html")
        userAuth = false
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
