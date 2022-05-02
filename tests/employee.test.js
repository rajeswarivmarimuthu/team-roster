const Employee = require("../lib/employee")

describe("Employee", () => {
    describe ("Initialization", ()=>{
        it ("should instantiate new employee", ()=>{
            //arrange and act 
            const newEmployee = new Employee();
            //assert
            expect(typeof(newEmployee)).toBe('object');
        })

        it ("should instantiate new employee with all property", ()=>{
            const newEmp = new Employee('William', 100, 'will@gmail.com');
            expect(newEmp.empName).toEqual('William');
            expect(newEmp.id).toEqual(100);
            expect(newEmp.email).toEqual('will@gmail.com');
        })
 })
    describe ("Methods", ()=>{
        it("returns employee name when getName method is called", ()=> {
            const newEmpM = new Employee('Millie', 101, 'millie@gmail.com');
            const eName = newEmpM.getName();
            expect(eName).toEqual('Millie');
        })

        it ("returns employee id when getID method is called", ()=>{
            const newEmpM = new Employee('Millie', 101, 'millie@gmail.com');
            const eID = newEmpM.getId();
            expect(eID).toEqual(101);
        })

        it ("returns employee email when getEmail method is called", ()=>{
            const newEmpM = new Employee('Millie', 101, 'millie@gmail.com');
            const empEmail = newEmpM.getEmail();
            expect(empEmail).toEqual('millie@gmail.com');
        })

        it ("returns employee role when getRole method is called", ()=>{
            const newEmpM = new Employee('Millie', 101, 'millie@gmail.com');
            const empRole = newEmpM.getRole();
            expect(empRole).toEqual('employee');
        })


 })

})