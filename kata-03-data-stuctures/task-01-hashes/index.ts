import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Use HSET to set field value paris in a hash
  await redis.hset("myHash", {
    field1: "value1",
    field2: "value2",
  });

  // Use HGET to get the value of a specific field in a hash
  const value = await redis.hget("myHash", "field1");
  if (value !== "value1") {
    console.error("Failed the HGET command test");
  }

  // Use HDel to delete a field from a hash
  await redis.hdel("myHash", "field1");
  const deletedValue = await redis.hget("myHash", "field1");
  if (deletedValue !== null) {
    console.error("Failed the HDEL command test");
  }

  // Use HGETALL to get all field value pairs from a hash

  const allValues = await redis.hgetall("myHash");
  if (JSON.stringify(allValues) !== JSON.stringify({ field2: "value2" })) {
    console.error("Failed the HGETALL command test");
  }

  console.log("Successfully completed the hash commands test");
  redis.quit();
})();
