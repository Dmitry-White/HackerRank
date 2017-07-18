=begin
Created on Sun Jul  11 14:39:17 2017

@author: Dmitry White
=end

=begin 
    TODO: Use the control structure unless and update all elements of the array who are not admins.
    User has two public methods, is_admin? and update_score.
=end 

def scoring(array)
  array.each do
    |user|      
    unless user.is_admin?
        user.update_score
    end
  end
end