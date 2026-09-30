import express from "express" // const express = require("express");

const app = express();

app.get("/api/notes", (req,res) => {
    res.send("you got the 5 notes");
});
app.post("/api/notes", (req, res) => {
    res.send("You got the 5 notes");
});

app.listen(5001, () => {
    console.log("Server started on PORT; 5001");
});


