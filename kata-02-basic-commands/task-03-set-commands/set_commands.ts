import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Use SADD to add members to a set

  await redis.sadd("mySet", "item1", "item2");

  // Use SMEMBERS to get all members of a set
  const members = await redis.smembers("mySet");
  if (!members.includes("item1") || !members.includes("item2")) {
    console.error("Failed the SMEMBERS command test");
  }

  // Use SREM to remove a member from a set
  await redis.srem("mySet", "item1");
  const membersAfterSrem = await redis.smembers("mySet");
  if (
    membersAfterSrem.includes("item1") ||
    !membersAfterSrem.includes("item2")
  ) {
    console.error("Failed the SREM command test");
  }

  console.log("All set command tests passed.");

  redis.quit();
})();
