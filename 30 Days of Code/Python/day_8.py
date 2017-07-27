"""
Created on Wed Jul  26 16:05:33 2017

@author: Dmitry White
"""

# TODO: Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers.
# You will then be given an unknown number of names to query your phone book for.
# For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber;
# if an entry for name is not found, print Not found instead.

phonebook = {}
n = int(input())
for _ in range(n):
    name, number = input().split()
    phonebook[name] = number

while True:
    try:
        query = input()
        if query in phonebook:
            print(query,"=",phonebook[query], sep="")
        else:
            print("Not found")
    except:
        break
