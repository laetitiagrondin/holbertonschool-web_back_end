#!/usr/bin/env python3
"""Module to insert a document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Python function that inserts a new document
       in a collection based on kwargs"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
