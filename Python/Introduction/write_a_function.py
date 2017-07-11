"""
Created on Sun Jul  11 14:23:57 2017

@author: Dmitry White
"""

# TODO: You are given the year, and you have to write a function to check if the year is leap or not.

def is_leap(year):
    leap = False
    
    if year % 100 == 0:
        if year % 400 == 0:
            leap = True
    else:
        if year % 4 == 0:
            leap = True
    
    return leap