"""
Created on Sat Jul  29 00:47:51 2017

@author: Dmitry White
"""

# Mr. Vincent works in a door mat manufacturing company. One day, he designed a new door mat with the following specifications:
#   Mat size must be X. ( is an odd natural number, and  is  times .)
#   The design should have 'WELCOME' written in the center.
#   The design pattern should only use |, . and - characters.

N, M = map(int,input().split())
for i in range(1,N,2):
    print((".|."*i).center(M, "-"))
print("WELCOME".center(M, "-"))
for i in range(N-2,-1,-2):
    print((".|."*i).center(M, "-"))
