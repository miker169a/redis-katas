# Task 2: Implementing a Simple Atomic Operation Using Transactions

## Objective

Learn how to implement an atomic operation using Redis transactions with `MULTI` and `EXEC`.

## Steps

1. Create a Redis List with a few items.
2. Perform a `LPOP` to remove and get an item from the list.
3. At the same time, decrement a counter which keeps track of the list's length.
4. Ensure both steps are atomic.

## Validation

Run `ts-node index.ts` to validate your code.
