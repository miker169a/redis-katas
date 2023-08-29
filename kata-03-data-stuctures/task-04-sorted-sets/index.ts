import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // 1. Use ZADD to add members to a sorted set
  await redis.zadd("mySortedSet", 1, "one", 2, "two", 3, "three");

  // 2. Use ZRANGE to get all members of a sorted set
  const members = await redis.zrange("mySortedSet", 0, -1);
  if (
    !members.includes("one") ||
    !members.includes("two") ||
    !members.includes("three")
  ) {
    console.error("Failed the ZRANGE command test");
  }

  // 3. Use ZRANGE with WITHSCORES to get all members of a sorted set with their scores
  const membersWithScores = await redis.zrange(
    "mySortedSet",
    0,
    -1,
    "WITHSCORES"
  );
  if (
    !membersWithScores.includes("one") ||
    !membersWithScores.includes("2") ||
    !membersWithScores.includes("3")
  ) {
    console.error("Failed the ZRANGE command test with WITHSCORES");
  }

  // 4. Use ZREM to remove a member from a sorted set
  await redis.zrem("mySortedSet", "one");
  const afterRemoval = await redis.zrange("mySortedSet", 0, -1);
  if (afterRemoval.includes("one")) {
    console.error("Failed the ZREM command test");
  }
  console.log("All sorted set command tests passed.");

  redis.quit();
})();
