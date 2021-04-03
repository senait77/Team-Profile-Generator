// list your vairiables here
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html'); 

const render = require('./lib/htmlRenderer');
const inquirer = require('inquirer');
const team = [];

// Manager Prompt
const addManager = () => {
    return new Promise((res) => {
        inquirer.prompt([
            {
                type: 'input',
                message:"Please Provide Manager's name:",
                name: 'name',
            },
            {
                type: 'input',
                message:"Please Provide Manager's id:?",
                name: 'id',
            },
            {
                type: 'input',
                message:"Please Provide Manager's email:",
                name: 'email',
                default: () => {},
                validate: function (email) {
                  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                  if (valid) {
                      return true;
                  } else {
                      console.log('----please enter a valid email adress---');
                      return false;
                  }
                }
            },
            {
                type: 'input',
                message:"Please Provide Manager's office number?",
                name: 'officeNumber',
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            res();
        });
    });
}

// propmt for adding Engineer or Intern input 
const addEmployee = () => {
    return new Promise((resolve) => {
        inquirer.prompt([
            {
                type: 'list',
                message: ' Select the Employee you would like to add:',
                name: 'role',
                choices: [
                    'Engineer',
                    'Intern',
                    {
                        name: 'No more employees to add',
                        value: false
                    }
                ]
            },
            {
                message: "Enter enginneer's name:",
                name: 'name',
                when: ({role}) => role === 'Engineer'
            },
            {
                message: "Enter Intern's name:",
                name: 'name',
                when: ({role}) => role === 'Intern'
            },
            {
                message: "Enter enginneer's ID:",
                name: 'id',
                when: ({role}) => role === 'Engineer'
            },
            {
                message: "Enter Intern's ID:",
                name: 'id',
                when: ({role}) => role === 'Intern'
            },
            {
                message: "Enter enginneer's email address:",
                name: 'email',
                default: () => {},
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                     if (valid) {
                    return true;
                    } else {
                    console.log(" ---Please enter a valid email!---")
                    return false;
                    }
                  },  
                when: ({role}) => role === 'Engineer'
            },
            {
                message: "Enter Intern's email adress:",
                name: 'email',
                default: () => {},
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                     if (valid) {
                    return true;
                    } else {
                    console.log(" ---Please enter a valid email!---")
                    return false;
                    }
                  },  
                when: ({role}) => role === 'Intern'
            },
            {
                message: "Enter Enginneer's GitHub username:",
                name: 'github',
                when: ({role}) => role === 'Engineer'
            },
            {
                message: "Enter Intern's School name:",
                name: 'school',
                when: ({role}) => role === 'Intern'
            },
        ]).then(answers => {
            if(answers.role) {
                switch(answers.role) {
                    case "Engineer":
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        team.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        team.push(intern);
                        break;
                }
                return addEmployee().then(() => resolve());
            } else {
                return resolve();
            }
        })
    })
}

//calling Manager's and employee's prompt functions
addManager().then(() => {
    return addEmployee();
//calling render function to export team array information into html template   
}).then(() => {
    const templateHTML = render(team)
    generatePage(templateHTML);
}).catch((err) => {
    console.log(err);
});

//function to generate html page in dist folder
const generatePage = (htmlPage) => {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }

    fs.writeFile(distPath, htmlPage, "utf-8", (err) => {
        if(err) throw err;
        console.log("CONGRATULATIONS!!! Team profile page has been generated Succsesfully!");
    });
}



