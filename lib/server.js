const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code_challenge Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    response.json(StudentController.getStudentsPuente('visualpartners.json'));
});

app.listen(port, () => {
    console.log(`Code_challenge API in localhost:${port}`);
});