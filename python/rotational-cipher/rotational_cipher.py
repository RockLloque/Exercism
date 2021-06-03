import string

def rotate(text, key):
    encryptet=''
    for char in text:
        if char not in string.ascii_letters:
            encryptet += char
        else:
            index = (string.ascii_lowercase.find( char.lower() )+ key)%26
            encryptet += string.ascii_lowercase[index] if char.islower() else string.ascii_lowercase[index].upper()
    return encryptet