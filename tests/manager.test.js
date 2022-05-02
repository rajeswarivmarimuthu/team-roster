const Manager = require("../lib/manager");

describe("Manager", () => {
    describe ("Initialization", ()=>{
        it ("should instantiate new manager", ()=>{
            //arrange and act 
            const newManager = new Manager();
            //assert
            expect(typeof(newManager)).toBe('object');
        })

        it ("should instantiate new manager with all property", ()=>{
            const newEmp = new Manager('William', 100, 'will@gmail.com', 10001);
            expect(newEmp.empName).toEqual('William');
            expect(newEmp.id).toEqual(100);
            expect(newEmp.email).toEqual('will@gmail.com');
            expect (newEmp.officeNumber).toEqual(10001);
        })
 })
    describe ("Methods", ()=>{
        it("returns manager name when getName method is called", ()=> {
            const newEmpM = new Manager('Millie', 101, 'millie@gmail.com', 10002);
            const eName = newEmpM.getName();
            expect(eName).toEqual('Millie');
        })

        it ("returns manager id when getID method is called", ()=>{
            const newEmpM = new Manager('Millie', 101, 'millie@gmail.com', 10002);
            const eID = newEmpM.getId();
            expect(eID).toEqual(101);
        })

        it ("returns manager email when getEmail method is called", ()=>{
            const newEmpM = new Manager('Millie', 101, 'millie@gmail.com', 10002);
            const empEmail = newEmpM.getEmail();
            expect(empEmail).toEqual('millie@gmail.com');
        })

        it ("returns manager role when getRole method is called", ()=>{
            const newEmpM = new Manager('Millie', 101, 'millie@gmail.com', 10002);
            const empRole = newEmpM.getRole();
            expect(empRole).toEqual('manager');
        })

        it ("returns manager git username when getGitUserName method is called", ()=>{
            const newEmpM = new Manager('Millie', 101, 'millie@gmail.com', 10002);
            const officeNum = newEmpM.getOfficeNumber();
            expect(officeNum).toEqual(10002);
        })
 })

})