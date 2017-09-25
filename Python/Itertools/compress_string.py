"""
Created on Tue Sep 26 00:59:41 2017
@author: Dmitry White
"""

# TODO: You are given a string S. Suppose a character 'c' occurs
# consecutively X times in the string.
# Replace these consecutive occurrences of the character 'c'
# with (X,c) in the string.

import itertools
s = input()
print(*[(len(list(g)), int(k)) for k, g in itertools.groupby(s)])
