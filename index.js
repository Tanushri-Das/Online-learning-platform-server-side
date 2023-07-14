const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses=require('./data/courses.json');
const courseDetails=require('./data/AllCourses.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Learning API Running')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
  const id=req.params.id;
  const course=courseDetails.find(c => c.course_id === id);
  res.send(course);
})

app.get('/coursedetails',(req,res)=>{
    res.send(courseDetails)
})

app.get('/coursedetails/:id',(req,res)=>{
    const id=req.params.id;
    const selectedCourse=courseDetails.find(cd =>cd._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
  console.log(`Learning Platform running on port ${port}`)
})