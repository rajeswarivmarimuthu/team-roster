// Require classes from lib
const Engineer = require ('../lib/engineer');
const Manager = require ('../lib/manager');
const Intern = require ('../lib/intern');

function generateEmpCards (teamArray) {
    let cardHTML='';
    let empSpecificElement = '';
    let empSpecificTitle = '';

    for (i=1;i<= teamArray.length-1; i++) {

        switch (teamArray[i].getRole()) {
            case 'manager':
                empSpecificElement = `Office Number : ${teamArray[i].getOfficeNumber()}`;
                empSpecificTitle = `<i class="bi bi-cup-fill"></i> Manager`
                break;
            case 'engineer':
                empSpecificElement = `Git User : <a href="https://github.com/${teamArray[i].getGitUserName()}" class="contact-icons" target="_blank" rel="noopener noreferrer"> ${teamArray[i].getGitUserName()}
                </a>`
                empSpecificTitle = `<i class="bi bi-eyeglasses"></i> Engineer`
                break;
            case 'intern':
                empSpecificElement = `School: ${teamArray[i].getSchoolName()}`;
                empSpecificTitle = `<i class="bi bi-mortarboard-fill"></i> Intern`
                break;
        }

        cardHTML += `
        <div class="card m-4 shadow" style="width: 15rem;">
            <div class="bg-primary" style = 'height: 6rem'>
                <h5 class="card-title text-white m-3">${teamArray[i].getName()}</h5> 
                <h5 class="card-title text-white m-3"> ${empSpecificTitle}</h5>
            </div>
            <div class="card-body">
                <div>
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item"> ID: ${teamArray[i].getId()} </li>
                        <li class="list-group-item"> Email: <a href="mailto:${teamArray[i].getEmail()}" target="_blank" rel="noopener noreferrer">${teamArray[i].getEmail()}</a> </li>
                        <li class="list-group-item"> ${empSpecificElement} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
    return (cardHTML);
}

function generateHTML(teamArray){

    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>Team Roster</title>
    </head>
    <div class="jumbotron">
    <h1 class="display-4 text-center">${teamArray[0]}</h1>
    </div>
    <body>
        <div class = 'col-lg-12 row custom-deck justify-content-center', id='card-tile'> <!-- add team cards -->
        ${generateEmpCards(teamArray)}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    </body>
    </html>`; 
}



module.exports = generateHTML; 