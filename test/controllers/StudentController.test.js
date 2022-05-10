const StudentController = require('./../../lib/controllers/StudentController')

describe('Pruebas para StudentController', () => {
    test('Test 1: Obteniendo los explores mediante StudentController', () => {
        const students = StudentController.getStudentsPuente('./test/data/visualpartnersTest.json')

        expect(students.length).toBe(19)
    })
})