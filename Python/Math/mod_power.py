"""
Created on Fri Sep 08 13:02:36 2017

@author: Dmitry White
"""

# TODO:You are given three integers: a, b, and m, respectively. Print two lines.
# The first line should print the result of pow(a,b).
# The second line should print the result of pow(a,b,m).

a, b, m = int(input()), int(input()), int(input())
print(pow(a, b), pow(a, b, m), sep='\n')

