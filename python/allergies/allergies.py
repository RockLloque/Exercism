_allergy_list ={ 'eggs': 1<< 0, 'peanuts': 1 <<1, 'shellfish': 1 << 2, 'strawberries' : 1 << 3, 'tomatoes': 1 << 4, 'chocolate': 1 << 5, 'pollen': 1 << 6, 'cats' : 1 << 7}
class Allergies(object):

    def __init__(self, score):
        self.score =score

    def is_allergic_to(self, item):
        return (self.score & _allergy_list[item]) !=0

    @property
    def lst(self):
        result = list()
        for allergie, nr in _allergy_list.items():
            if self.score & nr:
                result.append(allergie)
        return result