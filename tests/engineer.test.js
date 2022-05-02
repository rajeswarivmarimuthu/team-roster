const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe ("Initialization", ()=>{
        it ("should instantiate new engineer", ()=>{
            //arrange and act 
            const newEngineer = new Engineer();
            //assert
            expect(typeof(newEngineer)).toBe('object');
        })

        it ("should instantiate new engineer with all property", ()=>{
            const newEmp = new Engineer('William', 100, 'will@gmail.com', 'willieCat');
            expect(newEmp.empName).toEqual('William');
            expect(newEmp.id).toEqual(100);
            expect(newEmp.email).toEqual('will@gmail.com');
            expect (newEmp.gitUserName).toEqual('willieCat');
        })
 })
    describe ("Methods", ()=>{
        it("returns engineer name when getName method is called", ()=> {
            const newEmpM = new Engineer('Millie', 101, 'millie@gmail.com', 'millieCute');
            const eName = newEmpM.getName();
            expect(eName).toEqual('Millie');
        })

        it ("returns engineer id when getID method is called", ()=>{
            const newEmpM = new Engineer('Millie', 101, 'millie@gmail.com', 'millieCute');
            const eID = newEmpM.getId();
            expect(eID).toEqual(101);
        })

        it ("returns engineer email when getEmail method is called", ()=>{
            const newEmpM = new Engineer('Millie', 101, 'millie@gmail.com', 'millieCute');
            const empEmail = newEmpM.getEmail();
            expect(empEmail).toEqual('millie@gmail.com');
        })

        it ("returns engineer role when getRole method is called", ()=>{
            const newEmpM = new Engineer('Millie', 101, 'millie@gmail.com', 'millieCute');
            const empRole = newEmpM.getRole();
            expect(empRole).toEqual('engineer');
        })

        it ("returns engineer git username when getGitUserName method is called", ()=>{
            const newEmpM = new Engineer('Millie', 101, 'millie@gmail.com', 'millieCute');
            const empGitUser = newEmpM.getGitUserName();
            expect(empGitUser).toEqual('millieCute');
        })
 })

})