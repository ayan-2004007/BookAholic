import express from 'express';
import connectDB from './db/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import BookModel from './models/Books.js';
import nodemailer from 'nodemailer';

const app = express();
// app.use(express.static('dist'))
app.use(bodyParser.json());
const corsOptions = {
  origin: ['https://bookaholiclibrary.netlify.app','http://localhost:5173'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

connectDB()
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed | ", err);
  });



app.get('/', (req, res) => {
  res.send("Welcome to the server. To see all books go to /books");
});
app.get('/books', async (req, res) => {
  try {
    const books = await BookModel.find();
    res.send(books)
  } catch (err) {
    console.log("Error fetching data:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/books/search', async (req, res) => {
  const { q: query } = req.query;
  // console.log('Search query:', query);
  try {
    const books = await BookModel.find({
      $or: [
        { bookname: new RegExp(query, 'i') },
        { authorname: new RegExp(query, 'i') },
        { category: new RegExp(query, 'i') }
      ]
    });
    // console.log(books);
    res.json(books);
  } catch (err) {
    console.log("Error searching for books:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/books/addBook', async (req, res) => {
  const { bookname, authorname, category, image, qty, availability, description } = req.body;
  // console.log(req.body)
  const newBook = new BookModel({
    bookname,
    authorname,
    category,
    image,
    qty,
    availability,
    description
  });
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' });
  }
});

app.delete('/admin/deleteBook/:bookname', async (req, res) => {
  const bookname = req.params.bookname;
  console.log(bookname);
  try {
    const deletedBook = await BookModel.findOneAndDelete({ bookname: { $regex: new RegExp(`^${bookname}$`, 'i') } });
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    return res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});


app.post('/subscribe', async (req, res) => {
  const {email}=req.body;
  if (!email||typeof email!=='string'||!email.includes('@')) {
    return res.status(400).json({error: 'Invalid email format'});
  }
  try {
    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.SERVICE_MAIL,
        pass:process.env.APP_PASSWORD
      }
    });
    const subscriberMailOptions={
      from: process.env.SERVICE_MAIL,
      to: email,
      subject: 'Subscription Confirmation',
      text: `Thank you for subscribing to our newsletter!
      Further updates will be sent to your gmail. Keep Reading :)`
    };
    const adminMailOptions = {
      from: email,
      to: process.env.SERVICE_MAIL,
      subject: 'New Subscriber',
      text: `A new subscriber has subscribed: ${email}`
    };
    await transporter.sendMail(subscriberMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({error:'Server error'});
  }
});

// USER ROITER

import userRouter from "./routes/user.routes.js"
import cookieParser from 'cookie-parser';
app.use("/users",userRouter)