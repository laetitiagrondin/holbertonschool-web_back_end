#!/usr/bin/env python3
"""Module providing a function to list all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """ Python function that lists all documents in a collection. """
    return list(mongo_collection.find())
