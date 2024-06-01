const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const productroute = require('./routes/productroutes');
const authRoutes = require('./routes/auth');


mongoose.connect('mongodb://localhost:27017/Sellerdashboard');

const app = express()

app.use(cors());
app.use(bodyParser.json());

const PORT = 8000;

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/', (req, res) => { res.send("Server Established")})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productroute);
app.use('/api/auth', authRoutes);

app.listen(PORT, function(){
   console.log(`listening on port ${PORT}`)
})