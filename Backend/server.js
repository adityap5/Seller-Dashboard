const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Sellerdashboard');



const app = express()

app.use(cors());
app.use(bodyParser.json());

const PORT = 8000;

app.get('/', (req, res) => { res.send("Server Established")})

app.listen(PORT, function(){
   console.log(`listening on port ${PORT}`)
})