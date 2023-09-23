

// creating the routes

// import the libs

const express = require('express');

const router=express.Router();

const task=require('../models/tasks');


// creating a new task


router.post('/tasks',async(req,res)=>{

    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    }
    catch(error){
        res.status(400).send(error);
    }
});


// read the tasks or retrive 

router.get('/tasks',async(req,res)=>{
    try {
        const tasks = await Task.find();
        res.send(tasks);
      } catch (error) {
        res.status(500).send(error);
      }

});


module.exports=router;