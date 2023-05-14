/*
Created on Sun May 14 17:13 2023

@author: Dmitry White
*/

/*
  Consider a database table, Emails, which has the attributes First Name and Email ID.
  Given N rows of data simulating the Emails table,
  print an alphabetically-ordered list of people whose email address ends in `@gmail.com`.
*/

/*
  Inputs: [
    "riya riya@gmail.com",
    "julia julia@julia.me",
    "julia sjulia@gmail.com",
    "julia julia@gmail.com",
    "samantha samantha@gmail.com",
    "tanya tanya@gmail.com"
  ]
*/
const GMAIL_REGEX = /[\w.+\-]+@gmail\.com$/i;

function doStuff(inputs) {
  const names = [];

  inputs.forEach((input) => {
    const [firstName, emailID] = input.split(' ');

    if (GMAIL_REGEX.test(emailID)) {
      names.push(firstName);
    }
  });

  names.sort();

  names.forEach((name) => console.log(name));
}
