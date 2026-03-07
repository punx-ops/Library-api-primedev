import express from 'express';
import {user} from './datauser.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Simple Library API');
});
app.get('/books', (req, res) => {
    res.send ('List of all books');
});
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.send(`Details of book with ID: ${bookId}`);
});
app.post('/books', (req, res) => {
    res.send('Book added to the library');
});
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.send(`Book with ID ${bookId} updated!`);
});
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.send(`Book with ID ${bookId} deleted!`);
});

app.get('/users', (req, res) => {
    res.json(user);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});