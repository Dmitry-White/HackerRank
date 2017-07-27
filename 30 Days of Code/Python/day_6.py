"""
Created on Tue Jul  25 12:02:55 2017

@author: Dmitry White
"""

# TDOD: Given a string, S, of length N that is indexed from 0 to N-1,
# print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.

T = int(input())
for i in range(T):
    even_s = ""
    odd_s = ""
    s = input()
    for i in filter(lambda x: x % 2 == 0, range(len(s))):
        even_s = even_s + s[i]
    for i in filter(lambda x: x % 2 != 0, range(len(s))):
        odd_s = odd_s + s[i]
    print(even_s, odd_s)
