const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const productroute = require('./routes/productroutes');
const authRoutes = require('./routes/auth');

dotenv.config();
mongoose.connect(process.env.MONGO_DB);

const app = express()

app.use(cors());
app.use(bodyParser.json());

const PORT = 8000 || process.env.PORT;

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