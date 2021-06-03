def is_armstrong(number):
    return sum(int(i)**len(str(number)) for i in str(number))== number