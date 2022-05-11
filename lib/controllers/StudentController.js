const StudentService = require("../services/StudentService");

class StudentController {
    static getStudentsPuente(students) {
        return StudentService.getStudents(students);
    }

    static getStudentsEmailsCertificationPuente(students) {
        return StudentService.getStudentsEmailsCertification(students);
    }

    static getStudentsCreditsPuente(students) {
        return StudentService.getStudentsCredits(students);
    }
}

module.exports = StudentController;
