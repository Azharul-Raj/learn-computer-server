const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
    res.send(`port is running at`)
})
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

const categories = require("./data/categories.json")
app.get('/categories', (req, res) => {
    res.send(categories);
})

const courses=require("./data/courses.json")
app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourses = courses.filter(category => category.category_id === id);
    res.send(selectedCourses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.course_uid === id);
    res.send(singleCourse);
})