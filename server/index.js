const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users')

app.use(express.json())

mongoose.connect(
    "mongodb+srv://dbmerndp:dp1234@cluster0.s4vm0.mongodb.net/ProadMan?retryWrites=true&w=majority"
    );


app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
    if (err) {
        res.json(err);
    } else {
        res.json(result);
    }
    });
});

app.post("/createUser", async (res, req) =>{
    const user = req.body.user
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(3001, () => {
    console.log("Server runs sucessfully");
});