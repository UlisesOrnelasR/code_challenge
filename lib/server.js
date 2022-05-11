const express = require("express");
const StudentController = require("./controllers/StudentController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Code_challenge Api welcome!" });
});

app.get("/v1/students", (request, response) => {
    response.json(StudentController.getStudentsPuente("visualpartners.json"));
});

app.get("/v1/students/emails", (request, response) => {
    students = StudentController.getStudentsPuente("visualpartners.json");
    response.json(StudentController.getStudentsEmailsCertificationPuente(students));
});

app.get("/v1/students/credits", (request, response) => {
    students = StudentController.getStudentsPuente("visualpartners.json");
    response.json(StudentController.getStudentsCreditsPuente(students));
});

app.listen(port, () => {
    console.log(`Code_challenge API in localhost:${port}`);
});
