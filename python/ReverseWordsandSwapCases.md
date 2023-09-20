**Problem Description:**

You need to implement a function called `reverse_words_order_and_swap_cases` that takes a string consisting of words separated by single spaces as input. The function should return a string containing all those words but in the reverse order and with swapped cases for all letters. In other words, lowercase letters should become uppercase, and uppercase letters should become lowercase.

**Function Signature:**

```python
def reverse_words_order_and_swap_cases(sentence: str) -> str:
    pass
```

**Input:**

- A string `sentence` containing words separated by single spaces.
- The length of `sentence` will not exceed 10^5 characters.
- The length of `sentence` will not exceed 10^5 characters.

**Output:**

- A string containing all the words from the `sentence` but in reverse order and with swapped cases for all letters.

**Example:**

```python
sentence = "runs dog"
result = reverse_words_order_and_swap_cases(sentence)
print(result)  # Output: "DoG RUNS"
```

In this example, the function takes the input sentence "runs dog," reverses the word order to "dog runs," and swaps the case of the letters to "DoG RUNS," which is returned as the output.
