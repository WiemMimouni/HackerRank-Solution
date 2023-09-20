def reverse_words_order_and_swap_cases(sentence):
    words = sentence.split()

    reversed_and_swapped = ' '.join([word.swapcase() for word in reversed(words)])

    return reversed_and_swapped