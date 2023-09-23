
// creating a server

// step -1  importing the libs.
const express =require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const cors =require('cors');



// step 2 creating the server
const app = express();

const port = process.env.PORT||3000;

// step 3 Middleware

app.use(bodyParser.json());
app.use(cors);

// after creating your route
const taskRoutes = require('../TaskManagerBackend/Routes/tasks');
app.use('/api', taskRoutes);


// step 4 Database connection
mongoose.connect('mongodb://localhost/taskManager',{useNewUrlParser: true,
useUnifiedTopology: true,}).then(() =>{
    console.log('Connected to the MongoDB database');
}).catch((err) => {
   console.log(err);
});


const db = mongoose.connection;




// last step is to start the server
app.listen(port,()=>{
    console.log('listening on port ${port}');
});


