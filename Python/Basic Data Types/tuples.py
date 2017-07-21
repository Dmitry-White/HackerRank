"""
Created on Tue Jul  18 23:40:57 2017

@author: Dmitry White
"""

# TODO: Given an integer, n, and n space-separated integers as input,
# create a tuple, t, of those n integers.
# Then compute and print the result of hash(t).

n = int(input())
integer_list = list(map(int, input().split()))
print(hash(tuple(integer_list)))

