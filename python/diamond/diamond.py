def make_diamond(letter):
    dist = ord(letter) - ord('A')
    diamond = [' '* dist + 'A' + ' '*dist ]

    diamond += [(' '*(dist-i) + chr(ord('A')+i) + ' '*(1+2*(i-1)) + chr(ord('A')+i) + ' '*(dist-i)) for i in range(1, dist+1)]

    #add the lower half of the diamond
    diamond += diamond[:-1][::-1]
    return ('\n'.join(diamond) + '\n')
