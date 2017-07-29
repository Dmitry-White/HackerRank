"""
Created on Sat Jul  29 15:11:26 2017

@author: Dmitry White
"""

# Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
# Given a 6 X 6 2D Array, A. An hourglass in A is a subset of values with indices
# falling in this pattern in A's graphical representation:
#   a b c
#     d
#   e f g
# There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

def hourglass_sum(init_x, init_y, arr):
        return (arr[init_x][init_y] + arr[init_x][init_y + 1] + arr[init_x][init_y + 2]
                + arr[init_x + 1][init_y + 1]
                + arr[init_x + 2][init_y] + arr[init_x + 2][init_y + 1] + arr[init_x + 2][init_y + 2])

arr = []
for _ in range(6):
    arr_t = [int(arr_temp) for arr_temp in input().split(' ')]
    arr.append(arr_t)

curr = 0
max_sum = -100
for init_x in range(4):
    for init_y in range(4):
        curr = hourglass_sum(init_x, init_y, arr)
        if curr > max_sum:
            max_sum = curr

print(max_sum)
