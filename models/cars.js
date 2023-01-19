// car model
import { Schema, models, model } from "mongoose";

//create mongoose required package
const mongoose = require("mongoose");

//create schema
const carSchema = mongoose.Schema({
//car properties

    name : {
        type:String,
        required: true
    },

    seats : {
        type: Number ,
        required: true
    },

    fueltype : {
        type:String,
        required: true
    },
    
    rentperday : {
        type: Number ,
        required: true
    },

    imagurls : [],  

    currentbookings : [],

    make : {
        type:String,
        required: true
    },

    description : {
        type:String,
        required: true
    }

   
} , {
    timestamps : true,
})

//creating model

//export it
module.exports = mongoose.models.cars || mongoose.model(
    'cars', carSchema);