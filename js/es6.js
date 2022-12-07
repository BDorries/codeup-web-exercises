/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

const user = {
    name: 'Billie',
    email: 'billie.dorries28@gmail.com',
    languages: ['HTML', 'CSS', 'Javascript', 'Java', 'C++', 'SQF', 'lua', 'C#']
}
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

 const name = 'Billie';
 const email = 'billie.dorries28@gmail.com';
 const languages = ['HTML', 'CSS', 'Javascript', 'Java', 'C++', 'SQF', 'lua', 'C#'];

//name = 'Jim';

// TODO: rewrite the object literal using object property shorthand
users.push({
    name: name,
    email: email,
    languages: languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => emails.push(user.email));
users.forEach((user) => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    const appropriateVariableName = {name: user.name, email: user.email, languages: user.languages}

    // TODO: rewrite the assignment below to use template strings
    developers.push(`${user.name}'s email is ${user.email}. ${user.name} knows ${user.languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

for (const developer of developers) {
    list += `<li>${developer}</li>`;
}
list += '</ul>';

document.write(list);
