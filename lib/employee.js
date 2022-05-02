class Employee {
    constructor (empName, id, email){
        this.empName = empName;
        this.id = id;
        this.email = email;
        this.role = "employee"
    }
    getName(){
        return this.empName;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
       return this.role;
    }
    
}

module.exports = Employee;