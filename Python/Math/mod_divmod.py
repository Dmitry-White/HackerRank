"""
Created on Thu Sep 07 15:56:31 2017

@author: Dmitry White
"""

# TODO: Read in two integers, a and b, and print three lines.
# The first line is the integer division a//b.
# The second line is the result of the modulo operator: a%b.
# The third line prints the divmod of a and b.

a, b = int(input()), int(input())
dm = divmod(a, b)
print(dm[0])
print(dm[1])
print(dm)
