=begin
Created on Mon Aug 07 23:35:22 2017

@author: Dmitry White
=end

# TODO: Write a line of code here that prints the contents of input_string to stdout.

N = gets.strip.to_i

if N%2 == 1 or (N > 5 and N <21)
    puts "Weird"
else
    puts "Not Weird"
end