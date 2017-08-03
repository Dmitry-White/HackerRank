"""
Created on Thu Aug 03 17:26:23 2017

@author: Dmitry White
"""

# TODO: Rupal has a huge collection of country stamps.
# She decided to count the total number of distinct country stamps in her collection.
# She asked for your help. You pick the stamps one by one from a stack of N country stamps.
# Find the total number of distinct country stamps.

n = int(input())
s = set()
[s.add(input()) for x in range(n)]
print(len(s))
