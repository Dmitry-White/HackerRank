=begin
Created on Sun Jul  11 15:04:17 2017

@author: Dmitry White
=end 

=begin
    TODO: Given the meal price (base cost of a meal),
    tip percent (the percentage of the meal price being added as tip),
    and tax percent (the percentage of the meal price being added as tax) for a meal,
    find and print the meal's total cost.
=end
def get_total_cost_of_meal()

    meal_cost = gets.to_f
    tip_percent = gets.to_i
    tax_percent = gets.to_i

    tip = meal_cost * (tip_percent.to_f/100)
    tax = meal_cost * (tax_percent.to_f/100)

    total_cost = (meal_cost + tip + tax).round.to_i
    
    return total_cost
end

print("The total meal cost is ", get_total_cost_of_meal(), " dollars.")