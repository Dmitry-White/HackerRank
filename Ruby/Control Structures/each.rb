=begin
Created on Sun Jul  11 14:39:17 2017

@author: Dmitry White
=end

=begin 
    TODO: Iterate through each of the elements in the array using each 
    and call the method update_score on every element.
=end     

def scoring(array)
    array.each do
        |user|        
        user.update_score
    end
end