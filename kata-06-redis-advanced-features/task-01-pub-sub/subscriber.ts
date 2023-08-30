import Redis from "ioredis";

const redis = new Redis();

redis.subscribe("chat");

redis.on("message", (channel, message) => {
  console.log(`Received the following message from ${channel}: ${message}`);
});
