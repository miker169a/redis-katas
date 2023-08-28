import Redis from "ioredis";

const redis = new Redis();

(async () => {
  // Use LPUSH to add items to the list from the left
  await redis.lpush("myList", "item1", "item2");

  let listAfterlPush = await redis.lrange("myList", 0, -1);

  if (JSON.stringify(listAfterlPush) !== JSON.stringify(["item2", "item1"])) {
    console.error("Failed the LPUSH command test");
  }

  // Use RPUSH to add items to the list from the right
  await redis.rpush("myList", "item3");

  let listAfterrPush = await redis.lrange("myList", 0, -1);
  if (
    JSON.stringify(listAfterrPush) !==
    JSON.stringify(["item2", "item1", "item3"])
  ) {
    console.error("Failed the RPUSH command test");
  }

  // Use LPOP to remove and get the first item from the list
  const lPopValue = await redis.lpop("myList");
  if (lPopValue !== "item2") {
    console.error("Failed the LPOP command test.");
  }

  // Use RPOP to remove and get the last item from the list
  const rPopValue = await redis.rpop("myList");
  if (rPopValue !== "item3") {
    console.error("Failed the RPOP command test.");
  }

  console.log("All list command tests passed.");

  redis.quit();
})();
