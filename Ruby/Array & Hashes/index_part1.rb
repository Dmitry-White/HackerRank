=begin
Created on Fri Jul  21 23:56:27 2017

@author: Dmitry White
=end

=begin
    TODO: Complete the functions using syntax as explained below:
        return the element of the Array variable `arr` at the position `index`
        return the elements of the Array variable `arr` between the start_pos and end_pos (both inclusive)
        return the elements of the Array variable `arr`, start_pos inclusive and end_pos exclusive#
        return `length` elements of the Array variable `arr` starting from `start_pos`
=end

def element_at(arr, index)
    arr[index]
end

def inclusive_range(arr, start_pos, end_pos)
    arr[start_pos..end_pos]
end

def non_inclusive_range(arr, start_pos, end_pos)
    arr[start_pos...end_pos]
end

def start_and_length(arr, start_pos, length)
    arr[start_pos, length]
end