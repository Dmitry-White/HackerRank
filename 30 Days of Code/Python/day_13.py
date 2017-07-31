"""
Created on Sat Jul  29 16:53:11 2017

@author: Dmitry White
"""

# TODO: Given a Book class and a Solution class, write a MyBook class that does the following:
#   Inherits from Book
#   Has a parametrized constructor taking these 3 parameters:
#       1. string title
#       2. string author
#       3. int price
#   Implements the Book class abstract display() method so it prints these 3 lines:
#       1. "Title:", a space, and then current instance's title
#       2. "Author:", a space, and the current instance's author
#       3. "Price:", a space, and the current instance's price

from abc import ABCMeta, abstractmethod


class Book(object, metaclass=ABCMeta):
    def __init__(self, title, author):
        self.title = title
        self.author = author

    @abstractmethod
    def display(): pass


class MyBook(Book):
    def __init__(self, title, author, price):
        super().__init__(title, author)
        self.price=price

    def display(self):
        print("Title:", self.title)
        print("Author:", self.author)
        print("Price:", self.price)


title = input()
author = input()
price = int(input())
new_novel = MyBook(title, author, price)
new_novel.display()
