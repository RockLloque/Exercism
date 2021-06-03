import re
def verify(isbn):
    isbn = isbn.replace('-','')

    if len(isbn) != 10 or not re.match('\d{9}[0-9X]', isbn):
        return False

    checkSum = 0
    for i in range(10):
        if isbn[i] =='X':
            checkSum += 10
        else:
            checkSum += (10-i)* int(isbn[i])

    return checkSum %11 ==0