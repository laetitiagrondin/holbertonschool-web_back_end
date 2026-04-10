#!/usr/bin/env python3
"""Complex types - string and int/float to tuple"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple of the string k and the square
       of the int/float v as a float."""
    return (k, v ** 2)
