/*
Created on Sun May 14 15:58 2023

@author: Dmitry White
*/

/*
  Given the expected and actual return dates for a library book,
  create a program that calculates the fine (if any).
  The fee structure is as follows:
    1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
    2. If the book is returned after the expected return day
      but still within the same calendar month and year as the expected return date,
      fine = 15 * (number of days late).
    3. If the book is returned after the expected return month
      but still within the same calendar year as the expected return date,
      fine = 500 * (number of months late).
    4. If the book is returned after the calendar year in which it was expected,
      there is a fixed fine of 10000.

  Input:
    The first line contains 3 space-separated integers denoting
    the respective day, month, and year on which the book was actually returned.
    The second line contains 3 space-separated integers denoting
    the respective day, month, and year  on which the book was expected to be returned (due date).
*/

const calculateFine = (returned, due) => {
  const [returnedDay, returnedMonth, returnedYear] = returned.split(' ');
  const [dueDay, dueMonth, dueYear] = due.split(' ');

  if (+returnedYear > +dueYear) {
    return 10000;
  }
  if (+returnedYear === +dueYear) {
    if (+returnedMonth > +dueMonth) {
      return 500 * (+returnedMonth - +dueMonth);
    }
    if (+returnedMonth === +dueMonth) {
      if (+returnedDay > +dueDay) {
        return 15 * (+returnedDay - +dueDay);
      }
    }
  }

  return 0;
};

const processData = (input) => {
  const [returned, due] = input.split('\n');
  console.log(calculateFine(returned, due));
};
