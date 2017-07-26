"""
Created on Tue Jul  25 11:27:14 2017

@author: Dmitry White
"""

# TODO: Given an integer, n, print its first 10 multiples. Each multiple n*i (where 1 <= i <= 10)
# should be printed on a new line in the form: n x i = result.

n = int(input().strip())

for i in range(1,11):
    print(n, 'x', i, '=', n*i)
