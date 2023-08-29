import Redis from "ioredis";

const redis = new Redis();

(async () => {
  try {
    // Initialize the key with some value
    await redis.set("watchedKey", "100");

    // Start of optimistic concurrency control
    // Step 1: Watch the key
    await redis.watch("watchedKey");

    // Step 2: Retrieve the value of the key
    const value = await redis.get("watchedKey");

    if (value === null) {
      console.error("Key does not exist");
      return;
    }

    // Step 3: Perform some logic based on the value ie increment the value by 10
    const newValue = Number(value) + 10;

    // Step 4: Use MULTI and EXEC to update the key if it has not been modified
    const pipeline = redis.multi();

    pipeline.set("watchedKey", newValue.toString());

    const results = await pipeline.exec();
    // End of optimistic concurrency control
    // if watched key was modified by anything outside of optimistic
    // concurrency control, results will be null

    if (results === null || results[0][1] !== "OK") {
      console.error("Optimistic concurrency control failed. Key was modified");
    } else {
      console.log(
        `Optimistic concurrency control succeeded. New Value : ${newValue}`
      );
    }
  } catch (err) {
    console.error(`An error occurred: ${err}`);
  } finally {
    // Unwatch the key and clean up
    await redis.unwatch();
    await redis.del("watchedKey");
    redis.quit();
  }
})();
