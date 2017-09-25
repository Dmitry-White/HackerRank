"""
Created on Tue Sep 26 01:03:23 2017
@author: Dmitry White
"""

# TODO: You are given a function f(x) = x^2. You are also given K lists.
# The ith list comsists of Ni elements. You have to pick one element
# from each list so that the value from the equation below is maximized:
# S = (f(x1) + f(x2) + ... + f(xk)) % M.

from itertools import product
l = []
sum_list = []
n, M = map(int,input().split())
for _ in range(n):
    l.append(list(map(int,input().split()[1:])))
new = list(product(*l))
for thing in new:
    sum_list.append(sum(x*x for x in thing)%M)
print(max(sum_list))
