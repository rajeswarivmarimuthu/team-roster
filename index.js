// Require classes from lib
const Engineer = require ('./lib/engineer');
const Manager = require ('./lib/manager');
const Intern = require ('./lib/intern');
const generateHTML = require('./src/generateHTML');

// require necesscary packages 
const inquirer = require('inquirer');
const fs = require('fs');

// global variables
let teamName; 
let teamArray = [];
let addEmployee = true;

//Array of Questions: 
const teamQuestion = {
    type: "input",
    message: "Enter Your Team Name: ",
    name: "teamName"
}

const ManagerQuestions = [
    {
        type: "input",
        message: "Provide Manager's Name: ",
        name: "empName"
    }, 
    {
        type: "input",
        message: "Provide Manager's employee id: ",
        name: "empId"
    },
    {
        type: "input",
        message: "Provide Manager's email ID: ",
        name: "empEmail"
    },      
    {
        type: "input",
        name: "officeNumber",
        message: "Provide manager's Office Number: ",
    },
    {
        type: "confirm",
        name: "addEmp",
        message: "Would like to add an employee? [Y/N] "
    }
]

const employeeQuestions = [
    {
        type: "input",
        message: "Provide Employee Name: ",
        name: "empName"
    }, 
    {
        type: "input",
        message: "Provide Employee ID: ",
        name: "empId"
    },
    {
        type: "input",
        message: "Provide Employee Email ID: ",
        name: "empEmail"
    },    
    {
      message: "Provide Employee Role",
      name: "employeeRole",
      type: "list",
      choices: ["Engineer", "Intern"],
      filter(val) {
        return val.toLowerCase();
      }
    },
    {
        type: "input",
        name: "gitUser",
        message: "Provide employee's github username:",
        when: (answers) => {
            if (answers.employeeRole === "engineer") {
                return true;
            }
        }
   },
   {
        type: "input",
        name: "schoolName",
        message: "Provide employee's school name: ",
        when: (answers) => {
            if (answers.employeeRole === "intern") {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Provide employee's Office Number: ",
        when: (answers) => {
            if (answers.employeeRole === "Manager") {
                return true;
            }
        }
    },
    {
        type: "confirm",
        name: "addEmp",
        message: "Would like to add more employee? [Y/N] "
    }

]

async function init() {
    //get team name 
    await inquirer.prompt(teamQuestion)
    .then((answers) => {
        teamName = answers.teamName; 
        teamArray.push(teamName);
    });

    //get Manager details 
    await inquirer.prompt(ManagerQuestions)
    .then((answers) => {
        const mgrDetails = new Manager(answers.empName, answers.empId, answers.empEmail, answers.officeNumber); 
        teamArray.push(mgrDetails);
        addEmployee = answers.addEmp;
    });
        
    //get Employee details 
    while (addEmployee) {
        await employeePrompt();
    }
    const htmlFile = generateHTML(teamArray);
    fs.writeFile('./dist/teamRoster.html', htmlFile, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
    
    console.log(teamArray);
}

async function employeePrompt() {
    let empDetails; 
    await inquirer.prompt(employeeQuestions)
    .then((answers) => {
        if(answers.employeeRole == 'engineer') {
            empDetails = new Engineer(answers.empName, answers.empId, answers.empEmail, answers.gitUser); 
        } else {
            empDetails = new Intern(answers.empName, answers.empId, answers.empEmail, answers.schoolName); 
        }
        teamArray.push(empDetails);
        addEmployee = answers.addEmp;  
    });
}

init();