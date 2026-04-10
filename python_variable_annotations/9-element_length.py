#!/usr/bin/env python3
"""Complex types - string and int/float to tuple"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a tuple of the string k and the square
       of the int/float v as a float."""
    return [(i, len(i)) for i in lst]
