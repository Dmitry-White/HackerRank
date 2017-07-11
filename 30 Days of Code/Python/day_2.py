"""
Created on Sun Jul  11 14:50:17 2017

@author: Dmitry White
"""

# TODO: Given the meal price (base cost of a meal),
# tip percent (the percentage of the meal price being added as tip),
# and tax percent (the percentage of the meal price being added as tax) for a meal,
# find and print the meal's total cost.

def get_total_cost_of_meal():

    meal_cost = float(input())
    tip_percent = int(input())
    tax_percent = int(input())

    tip = meal_cost * (tip_percent/100)
    tax = meal_cost * (tax_percent/100)

    total_cost = int(round(meal_cost + tip + tax))
    
    return str(total_cost)

print("The total meal cost is " + get_total_cost_of_meal() + " dollars.")