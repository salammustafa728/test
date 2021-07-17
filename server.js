'use strict';

const express = require('express');
const app = express();
const superagent= require('superagent');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

require('dotenv').config();

const PORT= process.env.PORT;

const getData= require('./controller/art.controller');

const { getFavPiece,createFavPiece,deleteFavPiece,updateFavPiece } = require('./controller/artic.crud.controller')

app.get('/',(req,res)=>{
    res.send('workinnnnnnnnnnnnnnnnnnnnnnnnnnnng!');
})

// app.get('/art',getArtic);
app.get('/allData',getData);

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


//'mongodb://localhost:27017/art'
//////////////////////////////////////////
// create new fav art
app.post('/addFav',createFavPiece);//done

//  get fav art
app.get('/getFavData',getFavPiece);
// delete fav art

app.delete('/deleteFavData/:id',deleteFavPiece);

// update fav art
app.put('/updateFavData/:id',updateFavPiece);
////////////////////////////////////////

app.listen(PORT,()=>{
    console.log(`server working on ${PORT}`);
});