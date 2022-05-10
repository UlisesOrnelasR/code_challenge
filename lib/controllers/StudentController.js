const StudentService = require('./../../lib/services/StudentService')

class StudentController{

    static getStudentsPuente(students){
       return StudentService.getStudents(students)
    }
    static getStudentsEmailsCertificationPuente(students){
        return StudentService.getStudentsEmailsCertification(students)
    }
}

module.exports = StudentController