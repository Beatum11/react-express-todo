require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.set('strictQuery', false);


const Title = require("./models/title");
const url = process.env.DATABASE_URL;

 

app.get('/', (req, res) => {
    res.send(title);
})

app.get("/get", async (req, res) => {

    const result = await Title.find();

    res.json({
        "titles": result
    });
});

app.get("/get/:id", async(req, res) => {

    try{
        const titleId = req.params.id;
        const title = await Title.findById(titleId);
        res.send(title);
    } catch(e){
        res.status(500);
    }

});

app.post("/post", async (req, res) => {

    const title = new Title({
        name: req.body.name
    });

    try{
        await title.save();
        res.statusCode(201);
    } catch(e){
        res.status(400);
    }
});

app.put('/get/:id', async(req, res) => {

    const titleId = req.params.id;
    try{
        await Title.replaceOne({
            _id: titleId
        }, {
            "name": req.body.name
        });
    
        res.send("Fine");
    } catch(e){
        res.status(400);
    }
    
});

app.delete("/get/:id", async(req, res) => {
    
    const titleId = req.params.id;

    try{
        await Title.deleteOne({
            _id: titleId
        });
    
        res.send("FIINNEE");
    } catch(e){
        res.status(400);
    }
    
});

const start = async () => {
    try{
        await mongoose.connect(url);

        app.listen("8000", () => {
            console.log("App is running on Port 8000");
        });
    } catch(e){
        console.log(e.message);
    }
    
}

start();