"""
Created on Thu Jul  20 23:40:57 2017

@author: Dmitry White
"""

# TODO: You are given N numbers. 
# Store them in a list and find the second largest number.

n = int(input())
arr = list(set(map(int, input().split())))
arr.remove(max(arr))
print(max(arr))