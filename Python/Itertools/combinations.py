"""
Created on Mon Sep 11 19:39:22 2017
@author: Dmitry White
"""

# TODO: You are given a string S.
# Your task is to print all possible combinations, up to size k, of the string in lexicographic sorted order.

from itertools import combinations

s, k = input().split()
for i in range(1, int(k)+1):
    for x in combinations(sorted(s), i):
        print("".join(x))
