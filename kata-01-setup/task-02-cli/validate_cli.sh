#!/bin/bash

if [ "$(redis-cli ping)" == "PONG" ]; then
    echo "Redis CLI is working."
else
    echo "Failed to connect to Redis via CLI."
fi
