"""
Created on Wed Aug 30 23:26:07 2017

@author: Dmitry White
"""

# TODO:  ABC is a right triangle, 90 degrees at B.
# Therefore, angle ABC = 90 degrees.
# Point M is the midpoint of hypotenuse AC.
# You are given the lengths AB and BC.
# Your task is to find  angle MBC in degrees.

import math
AB, BC = int(input()), int(input())
hype = math.hypot(AB, BC)
angle = round(math.degrees(math.acos(BC/hype)))
degree = chr(176)
print(angle, degree, sep='')
