const Reader = require('./../../lib/utils/Reader')

describe('Pruebas para class Reader', () => {
    
    test('Test 1: Probando lectura del archivo', () => {
        const students = Reader.readJsonFile('./test/data/visualpartnersTest.json')

        expect(students.length).toBe(11)
    })
})