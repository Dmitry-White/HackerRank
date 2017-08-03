"""
Created on Thu Aug 03 17:22:09 2017

@author: Dmitry White
"""

# TODO: There is an array of n integers.
# There are also 2 disjoint sets, A and B, each containing  integers.
# You like all the integers in set A and dislike all the integers in set B.
# Your initial happiness is 0. For each i integer in the array, if i is in A,
# you add 1 to your happiness. If i is in B, you add -1 to your happiness.
# Otherwise, your happiness does not change. Output your final happiness at the end.
# The first line contains integers n and m separated by a space.

input()
l = map(int, input().split())
a = set(map(int, input().split()))
b = set(map(int, input().split()))
h = 0

for x in l:
    if x in a:
        h += 1
    if x in b:
        h -= 1

print(h)
