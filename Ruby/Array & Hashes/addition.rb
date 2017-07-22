=begin
Created on Sat Jul  22 20:32:27 2017

@author: Dmitry White
=end

=begin
    TODO: Complete three functions that take in the array arr and
        Add an element to the end of the list
        Add an element to the beginning of the list
        Add an element after a given index (position)
        Add more than one element after a given index (position)
=end

def end_arr_add(arr, element)
    arr.push(element)
end

def begin_arr_add(arr, element)
    arr.unshift(element)
end

def index_arr_add(arr, index, element)
    arr.insert(index, element)
end

def index_arr_multiple_add(arr, index)
    arr.insert(index,1,2)
end
