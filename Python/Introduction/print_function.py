"""
Created on Sun Jul  11 14:32:57 2017

@author: Dmitry White
"""

# TODO: Read an integer .
# Without using any string methods, try to print the following:
# 123...N ("..." represents the values in between)

#------------1st----------------

#n = int(input())
#s = []
#result = ""
#for i in range(1,n+1):
#    s.append(str(i))
#print(''.join(s))

#-------------------------------

#-----------2nd-----------------

#N = int(input())
#for i in range(1, N+1):
#    print(i, end="")

#-------------------------------
    
print(*range(1, int(input())+1), sep='')


