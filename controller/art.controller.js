'use strict';
const axios= require('axios');

const getData = async (req,res)=>{
    const artUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
 axios.get(artUrl).then(response=>{

    res.send(response.data.drinks);
 }).catch(error=>{
    console.log('==================');
     console.log('an error occurred');
     console.log(error);
     console.log('==================');
 });
    }

    module.exports=getData;
// const superagent= require('superagent');
// const ArticModel = require('../model/art.model')
// const getArtic = async (req,res)=>{
    
//  superagent.get(artUrl).then(data=>{
//     // res.send(data.body.data[0].title);
//     const responseData = data.body.data.map(art =>{
//         return new ArticModel(art);
//     });
//     res.send(responseData);
//  }).catch(error=>{
//     console.log('==================');
//      console.log('an error occurred');
//      console.log(error);
//      console.log('==================');
//  });

// }
// module.exports=getArtic;

// const superagent = require('superagent');

// const ArticModel = require('../model/art.model')

// const getArtic = async (req,res)=>{
//     const artUrl = ''
//     superagent.get(artUrl).then(res=>{
//         const responseData = data.body.data.map(art =>{
//             return new ArticModel(artUrl)
//         })
//         res,send(responseData);
//     }).catch(error=>console.log(error));
// }

