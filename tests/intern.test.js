const Intern = require("../lib/intern")

describe("Intern", () => {
    describe ("Initialization", ()=>{
        it ("should instantiate new intern", ()=>{
            //arrange and act 
            const newIntern = new Intern();
            //assert
            expect(typeof(newIntern)).toBe('object');
        })

        it ("should instantiate new intern with all property", ()=>{
            const newEmp = new Intern('William', 100, 'will@gmail.com', 'Harvard');
            expect(newEmp.empName).toEqual('William');
            expect(newEmp.id).toEqual(100);
            expect(newEmp.email).toEqual('will@gmail.com');
            expect (newEmp.schoolName).toEqual('Harvard');
        })
 })
    describe ("Methods", ()=>{
        it("returns intern name when getName method is called", ()=> {
            const newEmpM = new Intern('Millie', 101, 'millie@gmail.com', 'Stanford');
            const eName = newEmpM.getName();
            expect(eName).toEqual('Millie');
        })

        it ("returns intern id when getID method is called", ()=>{
            const newEmpM = new Intern('Millie', 101, 'millie@gmail.com', 'Stanford');
            const eID = newEmpM.getId();
            expect(eID).toEqual(101);
        })

        it ("returns intern email when getEmail method is called", ()=>{
            const newEmpM = new Intern('Millie', 101, 'millie@gmail.com', 'Stanford');
            const empEmail = newEmpM.getEmail();
            expect(empEmail).toEqual('millie@gmail.com');
        })

        it ("returns intern role when getRole method is called", ()=>{
            const newEmpM = new Intern('Millie', 101, 'millie@gmail.com', 'Stanford');
            const empRole = newEmpM.getRole();
            expect(empRole).toEqual('intern');
        })

        it ("returns intern git username when getGitUserName method is called", ()=>{
            const newEmpM = new Intern('Millie', 101, 'millie@gmail.com', 'Stanford');
            const empSchool = newEmpM.getSchoolName();
            expect(empSchool).toEqual('Stanford');
        })
 })

})