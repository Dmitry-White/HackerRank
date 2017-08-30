"""
Created on Wed Aug 30 23:26:07 2017

@author: Dmitry White
"""

# TODO: You are given a complex z. Your task is to convert it to polar coordinates.

import cmath
print(*cmath.polar(complex(input())), sep='\n')
