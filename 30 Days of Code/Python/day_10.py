"""
Created on Wed Jul  26 16:38:44 2017

@author: Dmitry White
"""

# TODO: Given a base-10 integer, n, convert it to binary (base-2).
# Then find and print the base-10 integer denoting the maximum
# number of consecutive 1's in n's binary representation.

n = int(input())
curr = 0
mx = 0
while n>0:
    rem = n % 2
    n //= 2
    if rem == 1:
        curr += 1
        if curr > mx:
            mx = curr
    else:
        curr = 0

print(mx)
