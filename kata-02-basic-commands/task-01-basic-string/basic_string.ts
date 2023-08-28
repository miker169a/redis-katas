import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Use Set to store a key value pair
  await redis.set("myKey", "myValue");

  // Use Get to retrieve a value from a key
  const value = await redis.get("myKey");
  if (value !== "myValue") {
    console.error("Failed the GET command test");
  }

  // Use Del to delete a key
  await redis.del("myKey");
  const deletedValue = await redis.get("myKey");
  if (deletedValue !== null) {
    console.error("Failed the DEL command test");
  }

  console.log("Successfully completed the basic string commands test");

  redis.quit();
})();
