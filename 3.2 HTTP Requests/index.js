import express from "express"
const app = express()

app.get("/", (req, res) =>{
    res.send("<h1>Hello Word</h1")
})

app.listen(3000, () => {
    console.log("The server is running at pot 3000")
})

app.get("/about", (req, res) => {
  // O servidor responde enviando um texto em formato HTML para o navegador.
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});


// Esta parte define o que acontece quando alguém acessa a página "/contact"
app.get("/contact", (req, res) => {
  // O servidor responde com outro texto em HTML.
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});