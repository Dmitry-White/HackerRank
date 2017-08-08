"""
Created on Tue Aug  08 23:37:22 2017

@author: Dmitry White
"""

# TODO: You are given a set A and N number of other sets.
# These N number of sets have to perform some specific mutation operations on set A.
# Your task is to execute those operations and print the sum of elements from set A.

input()
s = set(map(int, input().split()))
n = int(input())
for x in range(n):
    com, num = input().split()
    other = set(map(int,input().split()))
    if com == "intersection_update":
        s.intersection_update(other)
    elif com == "update":
        s.update(other)
    elif com == "symmetric_difference_update":
        s.symmetric_difference_update(other)
    elif com == "difference_update":
        s.difference_update(other)
print(sum(s))
