import Redis from "ioredis";

const redis = new Redis();

(async () => {
  await redis.publish("chat", "Hello World");
  console.log("Message published");

  redis.quit();
})();
