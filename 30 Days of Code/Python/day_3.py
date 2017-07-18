"""
Created on Sun Jul  18 23:45:57 2017

@author: Dmitry White
"""

# TODO: Given an integer, n, perform the following conditional actions:
# If n is odd, print Weird
# If n is even and in the inclusive range of 2 to 5, print Not Weird
# If n is even and in the inclusive range of 6 to 20, print Weird
# If n is even and greater than 20, print Not Weird

N = int(input().strip())

if N % 2 != 0:
    print("Weird")
elif N % 2 == 0: 
    if 2 <= N <= 5:
        print("Not Weird")
    elif 6 <= N <= 20:
        print("Weird")
    elif N > 20:
        print("Not Weird")