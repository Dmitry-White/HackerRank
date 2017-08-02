"""
Created on Sat Jul  29 17:14:22 2017

@author: Dmitry White
"""

# Complete the Difference class by writing the following:
#   A class constructor that takes an array of integers as a parameter
#    and saves it to the elements instance variable.
#   A computeDifference method that finds the maximum absolute difference between any 2 numbers
#    in N and stores it in the maximumDifference instance variable.


class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        self.maximumDifference = max(self.__elements) - min(self.__elements)

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
