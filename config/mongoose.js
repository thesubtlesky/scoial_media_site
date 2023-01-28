const mongoose = require('mongoose');

main().catch(err =>console.log("Error in connecting to database", err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/contacts_list_db');
    console.log("Successfully connected to db!");
}
