import { MongoClient } from "mongodb"

// to connect database
let database = null;

export async function connectedToDB() {
    // Replace the uri string with your 
    // connection string

    // we put it in .env
    const uri = '<connection string URI>';

    const client = new MongoClient(uri);


    try {
        // changing that code 
        // const database = client.db('sample_mflix');
        // const movies = database.collection('movies');
        // const query = { title: 'Back to the Future' };
        // const movie = await movies.findOne(query);
        // console.log(movie);
        // to:

        // check if connected or not -> .connect:
        // if this method i need to wait or not -> answer is yes
        await client.connect()
        // first we did connect then connecting database
        database = client.db("ecommerce")
        return database
        // this two lines we need it in out controller

    } catch (error) {
        console.error(error);
    }
}
// this func i will call it in controller
export function getDataBase() {
    return database
}
// call it in productController.js
// return it collection

// cluster -> databases -> collection -> document

// now connecting this file in server.mjs