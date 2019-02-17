//File Name" contact.js
//Author Name: Shila (300969886) Data: 16 Feb 2019

let express = require("express");
let router = express.Router();
let mongoose=require('mongoose');

//create a ref to the db schema
let contact=require('../models/contacts');
//get all contacts list-Read
router.get('/',(req,res,next)=>{
    contact.find((err,contactList)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(contactList);
            res.render('contact/list',{
                title:"List of all contacts",
                contactList:contactList
            });
        }
    });
});
module.exports = router;
