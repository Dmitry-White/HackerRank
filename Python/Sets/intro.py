"""
Created on Mon Jul  31 17:26:16 2017

@author: Dmitry White
"""

# TODO: Ms. Gabriel Williams is a botany professor at District College.
# One day, she asked her student Mickey to compute the average of
# all the plants with distinct heights in her greenhouse.


def average(array):
    array = set(array)
    return sum(array)/len(array)
