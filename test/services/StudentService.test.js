const StudentService = require('./../../lib/services/StudentService')

describe('Pruebas para StudentService', () => {
    test('Test 1: Consultando todos los estudiantes', () => {
        const studets = StudentService.getStudents('./test/data/visualpartnersTest.json')

        expect(studets.length).toBe(19)
    })
})