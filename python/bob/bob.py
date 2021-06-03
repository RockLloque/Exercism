#
# Skeleton file for the Python "Bob" exercise.
#
def hey(what):
    what = what.strip()

    if _is_question(what):
        if _is_shouting(what):
            return 'Whoa, chill out!'
        return 'Sure.'
    if _is_shouting(what):
        return 'Whoa, chill out!'

    if _is_silent(what):
        return'Fine. Be that way!' 

    return 'Whatever.'

def _is_silent(what):
    return what == ''

def _is_shouting(what):
    return what.isupper()

def _is_question(what):
    return what.endswith('?')