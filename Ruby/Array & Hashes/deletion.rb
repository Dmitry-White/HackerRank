=begin
Created on Thu Jul  27 16:17:44 2017

@author: Dmitry White
=end

=begin
    TODO: Complete the functions:
      delete the element from the end of the array and return the deleted element
      delete the element at the beginning of the array and return the deleted element
      delete the element at the position #index
      delete all the elements of the array where element = val
=end

def end_arr_delete(arr)
    arr.pop
end

def start_arr_delete(arr)
    arr.shift
end

def delete_at_arr(arr, index)
    arr.delete_at(index)
end

def delete_all(arr, val)
    arr.delete(val)
end
