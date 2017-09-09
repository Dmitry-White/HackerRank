"""
Created on Sat Sep 09 11:47:21 2017
@author: Dmitry White
"""

# TODO: You are given a two lists A and B. Your task is to compute their cartesian product A X B.

from itertools import product

A = list(map(int, input().split()))
B = list(map(int, input().split()))
print(*(list(product(A, B))))
