const StudentController = require('./../../lib/controllers/StudentController')

describe('Pruebas para StudentController', () => {
    test('Test 1: Obteniendo los explores mediante StudentController', () => {
        const students = StudentController.getStudentsPuente('./test/data/visualpartnersTest.json')

        expect(students.length).toBe(19)
    })
    test('Test 2: Obteniendo lista de emails de los students con certificacion', () => {
        const students = StudentController.getStudentsPuente('./test/data/visualpartnersTest.json')
        const studentsEmails = StudentController.getStudentsEmailsCertificationPuente(students)

        expect(studentsEmails[0]).toBe('Todd@visualpartnership.xyz')
        expect(studentsEmails.length).toBe(10)
    })
    test('Test 3: Filtrando students con creditos mayores a 500', () => {
        const students = StudentController.getStudentsPuente('./test/data/visualpartnersTest.json')
        const studentsConCreditosMayores = StudentController.getStudentsCreditsPuente(students)

        expect(studentsConCreditosMayores[0].credits).toBe(508)
        expect(studentsConCreditosMayores.length).toBe(11)
    })
})