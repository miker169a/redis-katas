import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Trigger BGSAVE
  //   await redis.bgsave();
  //   console.log("BGSAVE triggered");

  // Trigger SAVE (be careful, this is a blocking operation)
  await redis.save();
  console.log("SAVE completed");
  redis.quit();
})();
