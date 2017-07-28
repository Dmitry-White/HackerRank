"""
Created on Wed Jul  26 16:25:11 2017

@author: Dmitry White
"""

# TODO: Write a factorial function that takes a positive integer, N,
#  as a parameter and prints the result of N!(N factorial).

def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(int(input())))
