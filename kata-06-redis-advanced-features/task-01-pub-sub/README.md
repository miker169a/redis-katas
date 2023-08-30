# Task 1: Pub/Sub Messaging

In this task, you'll learn how to use Redis' Publish/Subscribe features.

## Steps

1. In `publisher.ts`, use the `publish` method from `ioredis` to send a message to the channel named "chat".
2. In `subscriber.ts`, use the `subscribe` method from `ioredis` to listen for messages on the "chat" channel and log them to the console.

## Validation

Run `npm install` to install the dependencies.

1. Open two terminal windows.
2. In one, run `npx ts-node subscriber.ts`.
3. In the other, run `npx ts-node publisher.ts`.
4. If messages sent from `publisher.ts` appear in `subscriber.ts`, the task is complete.
