"""
Created on Wed Jul  26 15:45:25 2017

@author: Dmitry White
"""

# TODO: Given an array, A, of N integers, print A's elements in reverse order
# as a single line of space-separated numbers.

n = int(input())
arr = reversed(input().split())
print(" ".join(arr))
