//File Name" contact.js
//Author Name: Shila (300969886) Data: 16 Feb 2019

let express = require("express");
let router = express.Router();
let mongoose=require('mongoose');

//create a ref to the db schema
let contactModel=require('../models/contacts');
//get all contacts list-Read
router.get('/',(req,res,next)=>{
    contactModel.find((err,contactList)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(contactList);
            res.render('contact/list',{
                title:"List of all contacts",
                contactList:contactList
            });
        }
    });
});
//post route for saving contact to mongoDB
router.post('/',(req,res,next)=>{
    console.log(req.body);
    let newContact=contactModel({
"firstName":req.body.inputFName,
        "lastName": req.body.inputLName,
        "contactNumber": req.body.inputPhone,
        "email": req.body.inputEmail,
        "message": req.body.inputMessage
    });
    contactModel.create(newContact,(err,contactModel)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
res.redirect('/');
        }
    });
    
});

module.exports = router;
