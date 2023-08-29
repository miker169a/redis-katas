import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Begin transaction with MULTI
  const pipeline = redis.pipeline();

  // Some Redis commands
  pipeline.set("key1", "value1");
  pipeline.incr("counter");

  // Execute the transaction with EXEC
  const results = await pipeline.exec();

  if (results === null) {
    console.error("Failed the transaction test");
  } else {
    const setResult = results[0][1];
    const incrResult = results[1][1];
    if (setResult !== "OK" || incrResult !== 1) {
      console.error("Transaction failed");
    } else {
      console.log("Transaction succeeded");
    }
  }

  redis.quit();
})();
