/*
Created on Sat May 13 20:57 2023

@author: Dmitry White
*/

/*
  Read a string, S, and print its integer value;
  if S cannot be converted to an integer, print Bad String.
  Note: You must use the String-to-Integer and exception handling constructs only.
  If you attempt to use loops/conditional statements, you will get a 0 score.
*/

function throwParse(S) {
  try {
    const n = parseInt(S);
    console.log(n.toString().replace('NaN', 'Bad String'));
  } catch (err) {
    console.log('Bad String');
  }
}
