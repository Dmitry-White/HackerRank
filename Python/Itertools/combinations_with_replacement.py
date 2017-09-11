"""
Created on Mon Sep 11 19:42:37 2017
@author: Dmitry White
"""

# You are given a string S.
# Your task is to print all possible size k replacement combinations of the string in lexicographic sorted order.

from itertools import combinations_with_replacement

s, k = input().split()
for x in combinations_with_replacement(sorted(s), int(k)):
    print("".join(x))
