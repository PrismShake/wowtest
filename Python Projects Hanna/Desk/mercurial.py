import textwrap

wrapper = textwrap.TextWrapper(width=80,
    initial_indent=" " * 4,
    subsequent_indent=" " * 4,
    break_long_words=False,
    break_on_hyphens=False)

string = "my non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped stringmy non-wraped string"
print (wrapper.fill(string))