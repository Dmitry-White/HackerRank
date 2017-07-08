"""
Created on Sun Jul  9 02:17:11 2017

@author: Dmitry White
"""

# TODO:
# Given an integer, n, perform the following conditional actions:
#
# If n is odd, print Weird
# If n is even and in the inclusive range of  to , print Not Weird
# If n is even and in the inclusive range of  to , print Weird
# If n is even and greater than , print Not Weird

n = int(input())
if (n % 2) == 0:
    if n>=2 and n<5:
        print("Not Weird")
    elif n>=6 and n<=20:   
         print("Weird")   
    elif n>=20: print("Not Weird")
else:
    print("Weird")