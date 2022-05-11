const StudentService = require("../../lib/services/StudentService");

describe("Pruebas para StudentService", () => {
    test("Test 1: Consultando todos los estudiantes", () => {
        const studets = StudentService.getStudents("./test/data/visualpartnersTest.json");

        expect(studets.length).toBe(19);
    });

    test("Test 2: Obteniendo los emails de los estudiantes qu etengan certificación", () => {
        const students = StudentService.getStudents("./test/data/visualpartnersTest.json");
        const studentsEmailCertificados = StudentService.getStudentsEmailsCertification(students);

        expect(studentsEmailCertificados[0]).toBe("Todd@visualpartnership.xyz");
        expect(studentsEmailCertificados.length).toBe(10);
    });

    test("Test 3: Obteniendo estudiantes que tengan creditos > 500", () => {
        const students = StudentService.getStudents("./test/data/visualpartnersTest.json");
        const studentsCreditosMayores = StudentService.getStudentsCredits(students);

        expect(studentsCreditosMayores.length).toBe(11);
    });
});
