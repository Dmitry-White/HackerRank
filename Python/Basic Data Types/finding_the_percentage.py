"""
Created on Fri Jul  21 23:40:32 2017

@author: Dmitry White
"""

# TODO: You have a record of N students. Each record contains
# the student's name, and their percent marks in Maths, Physics
# and Chemistry. The marks can be floating values. 
# The user enters some integer N followed by the names
# and marks for  students. You are required to save the record
# in a dictionary data type. The user then enters a student's name.
# Output the average percentage marks obtained by that student,
# correct to two decimal places.

sum = 0
n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()
for x in student_marks[query_name]:
    sum += x
print("{0:.2f}".format(sum/3))