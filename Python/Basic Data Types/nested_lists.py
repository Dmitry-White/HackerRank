"""
Created on Fri Jul  21 23:40:57 2017

@author: Dmitry White
"""

# TODO: Given the names and grades for each student 
# in a Physics class of N students, store them in a nested list
# and print the name(s) of any student(s) having the second lowest grade.

names = []
scores = []
names_upd = []
scores_upd = []
almost = []
n = 0
for _ in range(int(input())):
    names.append(input())
    scores.append(float(input()))
       
    
score = min(scores)
for y in scores:
    if y != score:
        scores_upd.append(scores[n])
        names_upd.append(names[n])
    n += 1
    
n = 0
score = min(scores_upd)
for y in scores_upd:
    if y == score:
        almost.append(names_upd[n])
    n += 1
        
almost.sort()
for _ in almost:
    print(_)