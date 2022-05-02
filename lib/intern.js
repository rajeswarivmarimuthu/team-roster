const Employee = require('./employee.js');

class Intern extends Employee {
    constructor (empName, id, email, schoolName) {
        super (empName, id, email);
        this.role = "intern";
        this.schoolName = schoolName;
    }
    getSchoolName() {
        return this.schoolName; 
    } 
}

module.exports = Intern;