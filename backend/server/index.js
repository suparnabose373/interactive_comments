const express = require('express');
const mongoose = require('mongoose');
const mongoString = `mongodb+srv://suparnabose373:kNNmoFHTk4xJwMLa@internal-mad-matter.tqb3x3n.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoString, {
    dbName: 'comments_db',
  });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
// app.use(cors())
app.use(express.json());

const routes1 = require('../routes/commentRoutes');
app.use('/api', routes1)

app.listen(3010, () => {
    console.log(`Server Started at ${3010}`)
})