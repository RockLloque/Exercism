import re
def decode(string):
        string = re.sub(r'([a-z])([a-z])', r'\g<1>1\2', string)
        return re.sub(r'(\d+)(\D)' , lambda x: x.group(2) * int(x.group(1)),string)

def encode(string):
    string= re.sub(r'(.)\1*', lambda m: str(len(m.group(0))) + m.group(1), string)
    return re.sub(r'1(\D)', r'\1', string)