import Redis from "ioredis";

async function validateConnection(): Promise<void> {
  const redis = new Redis();
  redis.on("error", (err: Error) => {
    console.error(`Failed to connect to Redis: ${err}`);
  });

  redis.on("connect", () => {
    console.log("Successfully connected to Redis.");
  });

  redis.ping((err, res) => {
    if (err instanceof Error) {
      console.error(`Ping failed: ${err.message}`);
    } else if (res === "PONG") {
      console.log("Ping successful.");
    }
    redis.quit();
  });
}

validateConnection();
