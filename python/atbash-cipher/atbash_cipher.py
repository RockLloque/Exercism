def switch_char(char):
    return chr(ord('z') - ord(char) + ord('a')) if (char >= 'a' and char <= 'z') else char

def encode(plain_text):
    text = ''.join([c for c in plain_text if c.isalnum()]) #remove special characters
    text= decode(text)
    return ' '.join([text[i:i+5] for i in range(0, len(text), 5)]) #add whitespaces

def decode(text):
    text ="".join(text.split()).lower() #Remove all whitespaces and lower the string
    return ''.join(map(switch_char,  text)) #Use the cipher
