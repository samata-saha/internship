const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


// post data
router.post('/',async(req,res)=>{
    try{
        const {title,description,instructor,price,duration,thumbnail} = req.body;
        const course = new Course({title,description,instructor,price,duration,thumbnail});
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
});
// view all courses
router.get('/',async(req,res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;