#!/usr/bin/env python3
"""Executes multiple coroutines at the same time with async"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Returns the list of all the delays (float values) in ascending order."""
    delays = []
    tasks = [wait_random(max_delay) for i in range(n)]
    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)
    return delays
