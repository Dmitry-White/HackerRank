"""
Created on Fri Aug 04 02:15:17 2017

@author: Dmitry White
"""

# TODO: You have a non-empty set s, and you have to execute N commands given in N lines.
# The commands will be pop, remove and discard.

input()
s = set(map(int, input().split()))
com = []
N = int(input())
for x in range(N):
    l = input().split()
    if l[0] == "pop":
        s.pop()
    elif l[0] == "remove":
        s.remove(int(l[1]))
    elif l[0] == "discard":
        s.discard(int(l[1]))
print(sum(s))
