"""
Created on Tue Jul  25 12:31:11 2017

@author: Dmitry White
"""

# TODO: Print the number of times that the substring occurs in the given string.

def count_substring(string, sub_string):
    n = 0
    for part in range(0,len(string)-len(sub_string)+1):
        if string[part:part+len(sub_string)] == sub_string:
                  n += 1
    return  n
