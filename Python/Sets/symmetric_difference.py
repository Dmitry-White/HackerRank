"""
Created on Wed Aug 02 23:13:51 2017

@author: Dmitry White
"""

# TODO: Given 2 sets of integers, M and N,
# print their symmetric difference in ascending order.
#  The term symmetric difference indicates those values that
#  exist in either M or N but do not exist in both.

input()
a = set(input().split())
input()
b = set(input().split())

print(*sorted(map(int,(a.difference(b)  ^  b.difference(a)))), sep='\n')

