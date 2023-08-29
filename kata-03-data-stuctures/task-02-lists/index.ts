import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Initialize the list
  await redis.rpush("advancedList", "one", "two", "three", "four", "five");

  // Use LRANGE to get a range of items from the list
  const sublist = await redis.lrange("advancedList", 1, 3);
  if (JSON.stringify(sublist) !== JSON.stringify(["two", "three", "four"])) {
    console.error("Failed the LRANGE command test");
  }

  // Use LInsert to insert an item before another item in the list
  await redis.linsert("advancedList", "AFTER", "three", "three and a half");

  const afterInsert = await redis.lrange("advancedList", 0, -1);
  if (
    JSON.stringify(afterInsert) !==
    JSON.stringify(["one", "two", "three", "three and a half", "four", "five"])
  ) {
    console.error("Failed the LINSERT command test");
  }

  // Use LSET to set the value of an item in the list
  await redis.lset("advancedList", 1, "two-point-five");
  const afterSet = await redis.lrange("advancedList", 0, -1);
  if (
    JSON.stringify(afterSet) !==
    JSON.stringify([
      "one",
      "two-point-five",
      "three",
      "three and a half",
      "four",
      "five",
    ])
  ) {
    console.error("Failed the LSET command test");
  }

  // Use LTrim to trim to keep only a subrange
  await redis.ltrim("advancedList", 1, 4);
  const afterTrim = await redis.lrange("advancedList", 0, -1);
  if (
    JSON.stringify(afterTrim) !==
    JSON.stringify(["two-point-five", "three", "three and a half", "four"])
  ) {
    console.error("Failed the LTRIM command test");
  }

  console.log("All advanced list command tests passed.");

  redis.quit();
})();
