import Redis from "ioredis";
const redis = new Redis();

(async () => {
  // Use SETBIT to set a bit at offset of 10 in key 'myBitmap' to 1
  await redis.setbit("myBitmap", 10, 1);

  // Use GETBIT to get the value of the bit at offset of 10 in key 'myBitmap'
  const bitValue = await redis.getbit("myBitmap", 10);
  console.log(`Bit value at offset 10 is, ${bitValue}`);

  // Use BITCOUNT to count the number of set bits in key 'myBitmap'
  const bitCount = await redis.bitcount("myBitmap");
  console.log(`Number of set bits in myBitmap is, ${bitCount}`);

  redis.quit();
})();
