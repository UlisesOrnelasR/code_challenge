const Reader = require('./../../lib/utils/Reader')
class StudentService{
    
    static getStudents(filePath){
        return Reader.readJsonFile(filePath)
    }
}

module.exports = StudentService