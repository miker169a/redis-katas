# Task 3: Using WATCH for Optimistic Concurrency

## Objective

Learn how to use the Redis `WATCH` command for optimistic concurrency control.

## Steps

1. WATCH a key.
2. Retrieve the key's value.
3. Perform some logic based on the value.
4. Use `MULTI` and `EXEC` to update the key if it has not been modified by another process.

## Validation

Run `ts-node index.ts` to validate your code.
