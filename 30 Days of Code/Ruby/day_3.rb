=begin
Created on Mon Aug 07 23:35:22 2017

@author: Dmitry White
=end

# TODO: Given an integer, n, perform the following conditional actions:
# If n is odd, print Weird
# If n is even and in the inclusive range of 2 to 5, print Not Weird
# If n is even and in the inclusive range of 6 to 20, print Weird
# If n is even and greater than 20, print Not Weird

N = gets.strip.to_i

if N%2 == 1 or (N > 5 and N <21)
    puts "Weird"
else
    puts "Not Weird"
end