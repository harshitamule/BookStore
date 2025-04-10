import express from 'express';
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    return res.status(234).send("Welcome");
});

//route to save a new book
app.post('/books', async (req, res)=>{
    try{
        if(!req.body.title || !req.body.author ||!req.body.publishYear){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: err.message
        });
    }
}); 

//route to get all books from db
app.get('/books', async(req, res) => {
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data: books
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
})


mongoose.connect(mongoDBURL).then(()=>{
    console.log('app connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});

  