/*
  Created on Sat May 13 17:28 2023

  @author: Dmitry White
*/

/*
  TODO: Given a Book class and a Solution class, write a MyBook class that does the following:
    Inherits from Book
    Has a parametrized constructor taking these 3 parameters:
        1. string title
        2. string author
        3. int price
    Implements the Book class abstract display() method so it prints these 3 lines:
        1. "Title:", a space, and then current instance's title
        2. "Author:", a space, and the current instance's author
        3. "Price:", a space, and the current instance's price
*/

class Book {
  /**
   *  Creates a book
   *  @param title - A string denoting the Books's title.
   *  @param author - A string denoting the Book's author.
   */
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError(
        'Do not attempt to directly instantiate an abstract class.',
      );
    } else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log("Implement the 'display' method!");
  }
}

class MyBook extends Book {
  /**
   *  Creates my book
   *  @param title - A string denoting the Books's title.
   *  @param author - A string denoting the Book's author.
   *  @param price - A string denoting the MyBook's price.
   */
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    console.log('Title:', this.title);
    console.log('Author:', this.author);
    console.log('Price:', this.price);
  }
}
