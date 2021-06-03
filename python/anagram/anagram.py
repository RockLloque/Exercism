def detect_anagrams(word, candidates):
    word_sorted = ''.join(sorted(word.lower()))
    result = list()
    for w in candidates:
        if word_sorted == ''.join(sorted(w.lower())) and word.lower() != w.lower():
            result.append(w)

    return result