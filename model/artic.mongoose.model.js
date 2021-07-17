'use strict';

const mongoose = require('mongoose');
const favDrinks = new mongoose.Schema(
  { 
     name:{type: String},
     url: {type:String}
});

 const drinksPieceModel = mongoose.model('drinks',favDrinks);
module.exports=drinksPieceModel;
