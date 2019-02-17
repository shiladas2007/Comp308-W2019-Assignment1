let mongoose=require('mongoose');
//create a model class
let contactSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    contactNumber:String,
    email: String,
    message:String
},
    { collection: "contactList"}
);
//shila_contact is database, contactList is table name
module.exports = mongoose.model('shila_contact',contactSchema);