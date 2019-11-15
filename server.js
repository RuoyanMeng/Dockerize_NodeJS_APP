const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Constants
const PORT = process.env.PORT || 3000;
const db = "mongodb://mongo:27017/db";


// Connect with mongoDB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    })



// App
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world\n');
});

const usersRouter = require('./routes/users');
const groupRouter = require('./routes/groups');
const projectRouter = require('./routes/projects')

app.use('/users', usersRouter);
app.use('/groups', groupRouter);
app.use('/projects',projectRouter)


app.listen(PORT, ()=>{console.log(`Running on http://localhost:${PORT}`);});