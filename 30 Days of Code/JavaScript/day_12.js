/*
  Created on Sat May 13 17:16 2023

  @author: Dmitry White
*/

/*
  TODO: You are given two classes, Person and Student,
  where Person is the base class and Student is the derived class.
  Completed code for Person and a declaration for Student are provided for you in the editor.
  Observe that Student inherits all the properties of Person.
*/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      `Name: ${this.lastName}, ${this.firstName}\nID: ${this.idNumber}`,
    );
  }
}

class Student extends Person {
  /**
   *  Creates a Student
   *  @param firstName - A string denoting the Person's first name.
   *  @param lastName - A string denoting the Person's last name.
   *  @param id - An integer denoting the Person's ID number.
   *  @param scores - An array of integers denoting the Person's test scores.
   */
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  /**
   *  Calculates a grade
   *  @return A character denoting the grade.
   */
  calculate() {
    const sum = this.scores.reduce((acc, curr) => acc + curr, 0);
    const avr = Math.floor(sum / this.scores.length);

    if (avr >= 90 && avr <= 100) {
      return 'O';
    }
    if (avr >= 80 && avr < 90) {
      return 'E';
    }
    if (avr >= 70 && avr < 80) {
      return 'A';
    }
    if (avr >= 55 && avr < 70) {
      return 'P';
    }
    if (avr >= 40 && avr < 55) {
      return 'D';
    }
    if (avr < 40) {
      return 'T';
    }
  }
}
