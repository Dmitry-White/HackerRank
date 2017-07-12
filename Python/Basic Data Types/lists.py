"""
Created on Sun Jul  12 23:01:57 2017

@author: Dmitry White
"""

# TODO: Initialize your list and read in the value of n followed by n lines of commands where each command will be of the 7 types:
# "insert i e", "print", "remove e", "append e", "sort", "pop", "reverse".
# Iterate through each command in order and perform the corresponding operation on your list.

N = int(input())
list = []
line = []
for i in range(N):
    line = str(input()).split(" ")
    if line[0] == "insert":
        list.insert(int(line[1]),int(line[2]))
    if line[0] == "print":
        print(list)
    if line[0] == "remove":
        list.remove(int(line[1]))
    if line[0] == "append":
        list.append(int(line[1]))
    if line[0] == "sort":
        list.sort()
    if line[0] == "pop":
        list.pop()
    if line[0] == "reverse":
        list.reverse()