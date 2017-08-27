"""
Created on Sun Aug 27 23:49:10 2017

@author: Dmitry White
"""

# TODO: You are given two sets, A and n other sets.
# Your job is to find whether set A is a strict superset of each of the n sets.
# If set A is strict superset of each of the n sets, print True.
# Otherwise, print False.
# A strict superset has at least one element that does not exist in its subset.

A = set(input().split())
n = int(input())
print(all(A > set(input().split()) for _ in range(n)))