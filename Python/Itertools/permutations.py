"""
Created on Sat Sep 09 11:54:11 2017
@author: Dmitry White
"""

# You are given a string S.
# Your task is to print all possible permutations of size k of the string in lexicographic sorted order.

from itertools import permutations

s, k = input().split()
l = ["".join(x) for x in list(permutations(s, int(k)))]
for x in sorted(l):
    print(x)
