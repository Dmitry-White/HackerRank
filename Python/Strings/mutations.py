"""
Created on Mon Jul  24 23:21:55 2017

@author: Dmitry White
"""

# TODO: Read a given string, change the character at a given index and then print the modified string.

def mutate_string(string, position, character):
    l = list(string)
    l[position] = character
    string = "".join(l)
    return string
