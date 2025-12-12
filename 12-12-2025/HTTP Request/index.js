import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/about", (req,res) => {
    res.send("<h1>Hi I am Aswin</h1><p>I am from Chennai</p>")
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact me</h1><p>phone number: 98767 76567</p>")
})

app.listen(PORT,() => {
    console.log(`Server is Running on Port: ${PORT}`)
})