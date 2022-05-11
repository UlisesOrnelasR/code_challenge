const Reader = require("../utils/Reader");

class StudentService {
    static getStudents(filePath) {
        return Reader.readJsonFile(filePath);
    }

    static getStudentsEmailsCertification(students) {
        const studentsCertificados = students.filter((student) => student.haveCertification === true);
        const studentsEmail = studentsCertificados.map((student) => student.email);

        return studentsEmail;
    }

    static getStudentsCredits(students) {
        const studentsCreditosMayores500 = students.filter((student) => student.credits > 500);

        return studentsCreditosMayores500;
    }
}

module.exports = StudentService;
