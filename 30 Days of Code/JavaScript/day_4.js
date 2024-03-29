/*
  Created on Tue Oct 1 05:20 2019

  @author: Dmitry White
*/

/*
  TODO: Write a Person class with an instance variable, age, and a constructor
  that takes an integer, initialAge, as a parameter. The constructor must assign initialAge
  to age after confirming the argument passed as initialAge is not negative;
  if a negative argument is passed as initialAge, the constructor should set age to 0
  and print "Age is not valid, setting age to 0.". In addition, you must Write the following
  instance methods:
    1. yearPasses() should increase the age instance variable by 1
    2. amIold() should perform the following conditional actions:
        if age < 13, print "You are young."
        if age >= 13 and age < 18, print "You are a teenager."
        Otherwise, print "You are old."
*/

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  const AGE_YOUNG = 'You are young.';
  const AGE_TEENAGER = 'You are a teenager.';
  const AGE_OLD = 'You are old.';
  const AGE_NOT_VALID = 'Age is not valid, setting age to 0.';

  const isValidAge = (age) => age >= 0;

  if (!isValidAge(initialAge)) {
    console.log(AGE_NOT_VALID);
    this.a = initialAge;
  } else {
    this.a = initialAge;
  }

  this.amIOld = () => {
    const isYoungAge = this.a < 13;
    const isTeenAge = this.a >= 13 && this.a < 18;
    // Do some computations in here and print out the correct statement to the console
    if (isYoungAge) {
      console.log(AGE_YOUNG);
    } else if (isTeenAge) {
      console.log(AGE_TEENAGER);
    } else {
      console.log(AGE_OLD);
    }
  };

  this.yearPasses = () => {
    // Increment the age of the person in here
    this.a += 1;
  };
}

const mike = Person(5);
console.log('How old are you?', mike.amIOld());
mike.yearPasses();
console.log('What about now?', mike.amIOld());
