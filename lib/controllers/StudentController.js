const StudentService = require('./../../lib/services/StudentService')

class StudentController{

    static getStudentsPuente(students){
       return StudentService.getStudents(students)
    }
}

module.exports = StudentController