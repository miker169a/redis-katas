import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // 1. Use SADD to add members to a set
  await redis.sadd("set1", "apple", "banana", "pineapple");
  await redis.sadd("set2", "banana", "cherry");
  await redis.sadd("set3", "apple", "banana", "cherry", "date");

  // 2. Use SISMember to check if a member exists in a set
  const isMember = await redis.sismember("set1", "apple");
  if (!isMember) {
    console.error("Failed the SISMember command test");
  }

  // 3. Use SINTER to get the intersection of multiple sets
  const intersection = await redis.sinter("set1", "set2", "set3");

  if (!intersection.includes("banana")) {
    console.error("Failed the SINTER command test");
  }

  // 4. Use SUNION to get the union of multiple sets
  const union = await redis.sunion("set1", "set2", "set3");
  if (
    JSON.stringify(union) !==
    JSON.stringify(["apple", "banana", "pineapple", "cherry", "date"])
  ) {
    console.error("Failed the SUNION command test");
  }

  // 5. Use SDIFF to get the difference of multiple sets
  // When use SDIFF, the order of the sets matters
  // The result is the members of the first set that do not exist in the other sets
  const difference = await redis.sdiff("set1", "set2", "set3");
  if (JSON.stringify(difference) !== JSON.stringify(["pineapple"])) {
    console.error("Failed the SDIFF command test");
  }

  console.log("All advanced set command tests passed.");

  redis.quit();
})();
