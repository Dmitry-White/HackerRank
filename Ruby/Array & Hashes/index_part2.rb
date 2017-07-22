=begin
Created on Sat Jul  22 20:22:27 2017

@author: Dmitry White
=end

=begin
    TODO: Complete the functions using syntax as explained below:
        return the element of the array at the position `index` from the end of the list
        return the first element of the array
        return the last element of the array
        return the first n elements of the array
        drop the first n elements of the array and return the rest
=end

def neg_pos(arr, index)
    arr[-index]
end

def first_element(arr)
    arr.first
end

def last_element(arr)
    arr.last
end

def first_n(arr, n)
    arr.take(n)
end

def drop_n(arr, n)
    arr.drop(n)
end
