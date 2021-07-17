'use strict';

const drinksPieceModel = require('../model/artic.mongoose.model');


//POST controller
const createFavPiece = async (req,res)=>{
 const { name,url } = req.body;

    drinksPieceModel.findOne({name: name },(error,data)=>{
        if(error){
            res.send(error);
        }else if(data){
            res.send('data exists');
        }else{
            const newPeice = new drinksPieceModel({
                name: name,
                url: url
            });
            newPeice.save();
            res.send(newPeice);
        }      
    });
}
   
// GET Fav Controller 
const getFavPiece = async (req,res)=>{
    drinksPieceModel.find({},(error,data)=>{
        if(error){
            res.send(error);
        }else {
            res.send(data);
        }    
    })
   }

//Delete controller
const deleteFavPiece = async (req, res) =>{
    let id = req.params.id;
    console.log(id);
    drinksPieceModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
          res.status(500).send("there is an error");
        } else {
          res.send(data);
        }
    });
  }

//PUT controller
const updateFavPiece = async (req,res)=>{
    const name = req.body.name;
   
    let id = req.params.id; 
   
    drinksPieceModel.findOne({_id: id},(error,data)=>{
        if(error){
            res.send(error)
        }else {
         data.name = name;
         data.save();
         res.send(data);
        }
    });
}

module.exports={
    createFavPiece,
    getFavPiece,
    deleteFavPiece,
    updateFavPiece
}


