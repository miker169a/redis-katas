import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Initialize list and counter
  await redis.rpush("myList", "item1", "item2", "item3");
  await redis.set("listCount", "3");

  // Create a pipeline for atomic operations
  const pipeline = redis.pipeline();

  // Step 1: Perform a LPOP operation to remove and get an item
  // from the list
  pipeline.lpop("myList");

  // Step 2: Perform a DECR operation to decrement the counter
  pipeline.decr("listCount");

  // Execute the transaction
  const results = await pipeline.exec();

  if (results === null) {
    console.error("Pipeline execution failed");
    return;
  }

  const lpopResult = results[0][1];
  const decrResult = results[1][1];

  if (
    lpopResult === null ||
    typeof decrResult === "undefined" ||
    Number(decrResult) < 0
  ) {
    console.error("Atomic operation failed");
  } else {
    console.log(
      `Atomic operation succeeded. Removed item ${lpopResult}. New counter value: ${decrResult}`
    );
  }

  // Clean up
  await redis.del("myList");
  await redis.del("listCount");

  redis.quit();
})();
