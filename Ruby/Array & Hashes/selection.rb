=begin
Created on Fri Jul  28 23:53:23 2017

@author: Dmitry White
=end

=begin
    TODO: Complete the functions below using syntax:
        select and return all odd numbers from the Array variable `arr`
        delete all negative elements
        keep all non negative elements ( >= 0)
=end

def select_arr(arr)
    arr.select {|a| a % 2 != 0}
end

def reject_arr(arr)
    arr.reject {|a| a % 3 == 0}
end

def delete_arr(arr)
    arr.delete_if {|a| a < 0}
end

def keep_arr(arr)
  arr.keep_if {|a| a >= 0}
end
