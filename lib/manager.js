const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (empName, id, email, officeNumber) {
        super (empName, id, email);
        this.role = "manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber; 
    } 
}

module.exports = Manager;