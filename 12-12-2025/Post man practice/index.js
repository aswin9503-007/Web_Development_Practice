import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello, Aswin!</h1>")
})

app.post("/register", (req,res) => {
    res.sendStatus(201)
})

app.put("/user/aswin", (req,res) => {
    res.sendStatus(200)
})

app.patch("/user/aswin", (req,res) => {
    res.sendStatus(200)
})

app.delete("/user/aswin", (req,res) => {
    res.sendStatus(200)
})


app.listen(PORT, () => {
  console.log(`Server is Running in Port: ${PORT}`);
});
