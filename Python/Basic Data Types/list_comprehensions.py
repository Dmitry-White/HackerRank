"""
Created on Sun Jul  19 23:41:57 2017

@author: Dmitry White
"""

# TODO:  You are given three integers X, Y and Z 
# representing the dimensions of a cuboid along with an integer N.
# You have to print a list of all possible coordinates given by
# (i,j,k) on a 3D grid where the sum of i+j+k is not equal to N.

x = int(input())
y = int(input())
z = int(input())
n = int(input())
print (list([a,b,c] 
            for a in range(x+1)
                for b in range(y+1) 
                    for c in range(z+1) 
                        if a+b+c != n))