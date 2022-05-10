const Reader = require('./../../lib/utils/Reader')
class StudentService{
    
    static getStudents(filePath){
        return Reader.readJsonFile(filePath)
    }
    static getStudentsEmailsCertification(students){
        const studentsCertificados = students.filter((student) => {return student.haveCertification == true})
        const studentsEmail = studentsCertificados.map((student) => {return student.email})

        return studentsEmail
    }
}

module.exports = StudentService