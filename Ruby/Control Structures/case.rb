=begin
Created on Sun Jul  20 23:50:17 2017

@author: Dmitry White
=end

=begin 
    TODO:  You have to use the case control structure in Ruby 
    to identify the class to which the object belongs and 
    print the following output:
        if Hacker, output "It's a Hacker!"
        if Submission, output "It's a Submission!"
        if TestCase, output "It's a TestCase!"
        if Contest, output "It's a Contest!"
        for any other object, output "It's an unknown model"
=end 

def identify_class(obj)
    case obj
        when Hacker
            puts "It's a Hacker!"
        when Submission
            puts "It's a Submission!"
        when TestCase
            puts "It's a TestCase!"
        when Contest
            puts "It's a Contest!"
        else 
            puts "It's an unknown model"
    end
end