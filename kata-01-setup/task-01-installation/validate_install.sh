#!/bin/bash

if redis-cli ping; then
    echo "Redis installation is valid."
else
    echo "Redis is not installed or not running."
fi
