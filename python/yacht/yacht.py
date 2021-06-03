from collections import Counter

def count_nums(n):
    return lambda dice: dice.count(n)*n

# Score categories
# Change the values as you see fit
YACHT = lambda dice: 50 if len(set(dice)) ==1 else 0
ONES = count_nums(1)
TWOS = count_nums(2)
THREES =count_nums(3)
FOURS = count_nums(4)
FIVES = count_nums(5)
SIXES =count_nums(6)
FULL_HOUSE = lambda dice: sum(dice) if sorted(set(Counter(dice).values())) ==[2,3] else 0
FOUR_OF_A_KIND = lambda dice: sorted(dice)[3]*4 if sorted(set(Counter(dice).values())) == [1,4] or sorted(set(Counter(dice).values())) ==[5] else 0
LITTLE_STRAIGHT = lambda dice: 30 if sorted(dice) == [1,2,3,4,5] else 0
BIG_STRAIGHT = lambda dice: 30 if sorted(dice) == [2,3,4,5,6] else 0
CHOICE = sum


def score(dice, category):
    assert(len(dice) ==5)
    return category(dice)
