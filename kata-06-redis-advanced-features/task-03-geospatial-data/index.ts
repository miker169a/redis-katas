import Redis from "ioredis";
const redis = new Redis();

(async () => {
  // Add geospatial data for Manchester and London
  await redis.geoadd("UK_Cities", -2.2426, 53.4808, "Manchester");
  await redis.geoadd("UK_Cities", -0.1278, 51.5074, "London");

  // Find the distance between Manchester and London in meters
  const distance = await redis.geodist(
    "UK_Cities",
    "Manchester",
    "London",
    "m" as any
  );
  console.log(`Distance between Manchester and London: ${distance} meters`);

  // Find cities within 300 km of Manchester
  const cities = await redis.georadius(
    "UK_Cities",
    -2.2426,
    53.4808,
    300,
    "km"
  );
  console.log("Cities within 300 km of Manchester:", cities);

  redis.quit();
})();
