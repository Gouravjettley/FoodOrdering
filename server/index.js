const express = require ('express');
const mongoose = require ('mongoose');
const  user  = require ('./model');
const cors = require('cors')
const app = express();
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
require('dotenv').config()

const port = process.env.PORT
const salt = bcrypt.genSaltSync(10);
// const secret = 'vcjsvckbcksdbcksdbsdcv';

app.use(cors({
    origin: "*",
    headers: {
        "Access-Control-Allow-Origin": "https://food-ordering-client-eight.vercel.app",
        "Access-Control-Allow-Credentials": true
    },
}));   
app.use(express.json());   //the process of converting a JSON string to a JSON object for data manipulation.

mongoose.connect(" mongodb+srv://admin:admin@cluster0.wx78qai.mongodb.net/FoodOrdering?retryWrites=true&w=majority&appName=Cluster0");

app.get("/test",(req,res)=>{
 res.json("Hello");
})

app.post ("/Register", async(req,res)=>{
    const { username, password } = req.body;
    try {
          const userDoc = await user.create({
                username,
                password:bcrypt.hashSync(password, salt) 
          });
          res.json(userDoc);
    }
    catch (e) {
          res.status(400).json(e)
    }
});


app.post ("/Login", async(req,res)=>{
      const { username, password } = req.body;
      const userDoc = await user.findOne({ username });
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
            //logged in
            jwt.sign({ username, id: userDoc._id }, process.env.SECRET_KEY, {}, (err, token) => {
                  if (err) throw err;
                  res.cookie('token', token).json({
                        id: userDoc._id,
                        username,
                  });
            });
      }
      else {
            res.status(400).json('Wrong credentials')
      }
});

app.post('/Logout', (req, res) => {
      res.cookie('token', '').json('ok');
});

app.get('/Profile', (req, res) => {
      const { token } = req.cookies;
      jwt.verify(token, process.env.SECRET_KEY , {}, (err, info) => {
            if (err) throw err;
            res.json(info);
      });
});

app.post('/Logout', (req, res) => {
      res.cookie('token', '').json('ok');
});

app.listen(port,console.log("server started"));
