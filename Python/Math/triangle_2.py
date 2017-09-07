"""
Created on Thu Sep 07 15:52:06 2017

@author: Dmitry White
"""

# TODO: You are given a positive integer N.
# Your task is to print a palindromic triangle of size N.

for i in range(1, int(input())+1):
    print(((10**i-1)//9)**2)
