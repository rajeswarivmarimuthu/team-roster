const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor (empName, id, email,gitUserName) {
        super (empName, id, email);
        this.role = "engineer";
        this.gitUserName = gitUserName;
    }
    getGitUserName() {
        return this.gitUserName; 
    } 
}

module.exports = Engineer;