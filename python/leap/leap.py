def is_leap_year(year):
    if type(year) != int:
        raise Exception("Parameter 'year' must be of type int!")

    return (year % 400 ==0) or (year % 4 ==0) and not (year % 100 ==0)