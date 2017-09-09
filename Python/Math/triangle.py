"""
Created on Sat Sep 09 11:42:08 2017
@author: Dmitry White
"""

# TODO: You are given a positive integer N.
# Print a numerical triangle of height N-1 like the one below:
# 1
# 22
# 333
# 4444
# 55555
# ......
# Can you do it using only arithmetic operations, a single for loop and print statement?
# Use no more than two lines.

for i in range(1, int(input())):
    print(sum(map(lambda x: i * 10**x, range(i))))
