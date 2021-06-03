number_list_ten = { 0:'', 1 : 'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen'}

number_list_hundred ={2: 'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'}

number_list_thousands={0:'', 1:'thousand', 2: 'million', 3:'billion'}

def tenth(num):
    if num < 14:
        return number_list_ten[num]
    elif num < 20:
        return number_list_ten[num%10] + 'teen'
    else:
        result = number_list_hundred[int(num/10)]
        result += '-'+number_list_ten[num%10] if number_list_ten[num%10] else ''
        return result

def hundreds(num):
    if num <100: return tenth(num)
    result = (number_list_ten[int(num/100)]+ ' hundred') if number_list_ten[int(num/100)] else ''
    result += (' and '  +tenth(num%100)) if tenth(num%100) else ''
    return result 

def say(number):
    if (number < 0 or number >= 1e12):
        raise ValueError('Value out of range')
    if number ==0: return 'zero'
    counter =0 #counts the length: 1000**counter
    result=''
    while number:
        result_temp = hundreds(number % 1000)
        number = int(number/1000)
        result_temp += (' ' +number_list_thousands[counter] + ' ') if (number_list_thousands[counter] and result_temp)  else ''
        counter +=1
        if (result_temp and result and not (' and ' in result)): result = 'and ' + result
        result = result_temp + result
    return result.strip()
        
