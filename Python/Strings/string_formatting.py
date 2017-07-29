"""
Created on Sat Jul  29 14:37:33 2017

@author: Dmitry White
"""

# Given an integer, n, print the following values for each integer i from 1 to n:
#    Decimal
#    Octal
#    Hexadecimal (capitalized)
#    Binary

def print_formatted(number):
    j = number
    for i in range(1,number+1):
        print("{0:>{width}}".format(i, width = number.bit_length() ),
        "{0:>{width}}".format(oct(i)[2:], width = number.bit_length()),
        "{0:>{width}}".format(hex(i)[2:].upper(), width = number.bit_length()),
        "{0:>{width}}".format(bin(i)[2:], width = number.bit_length()))
