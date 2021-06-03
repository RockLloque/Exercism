def sum_of_multiples(limit, factors):
    return sum([i for i in range(limit) if any([ i % val == 0 for val in factors])])
