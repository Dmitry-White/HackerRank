"""
Created on Tue Sep 26 01:03:23 2017
@author: Dmitry White
"""

# TODO: You are given a list of N lowercase English letters.
 # For a given integer K, you can select any K indices
 # (assume 1-based indexing) with a uniform probability from the list.
# Find the probability that at least one of the K
# indices selected will contain the letter: 'a'.

import itertools
sm = 0
_,s,k = input(),input().split(),int(input())
l = list(itertools.combinations(s,k))
for x in l:
    if 'a' in x:
        sm +=1
print("{0:.3}".format(sm/len(l)))
