# Task 2: Bitmaps in Redis

## Objective

Learn how to work with Redis Bitmaps for efficient data storage and retrieval.

# Use Cases for bit maps

1. Real-time Analytics
   Bitmaps can be used to efficiently track real-time metrics like user activities. For example, you can use a single string to represent user logins for each day. Each bit in the string can correspond to a unique user ID, and you can set it to 1 when that user logs in.

2. Feature Flags
   Bitfields can be used to control feature access for a group of users. By setting different bits to 1 or 0, you can turn certain features on or off for particular users without requiring a separate key for each user and feature combination.

3. Data Filtering
   Bitmaps can be used for quick and efficient data filtering operations. For example, you can represent a set of filtered results as a bitmap and perform AND/OR/XOR operations to combine different sets quickly.

4. Counting Unique Elements
   Since each bit can represent a unique ID, you can use BITCOUNT to count the number of unique elements represented by a bitmap. This is useful in situations like analytics for unique website visitors.

5. Storing Compact States
   In applications like games, you may need to store the state of various elements (e.g., whether a level is locked or unlocked). Bitmaps can be a very efficient way to do this.

6. Bloom Filters
   Though not a native bitmap application, you can implement a simple Bloom filter using bitmaps in Redis. A Bloom filter is a probabilistic data structure used to test whether an element is a member of a set or not.

7. Compression
   By using bit-level operations, you can build simple compression algorithms. While Redis itself does not directly provide compression features for bitmaps, you can certainly build them into your client-side logic.

8. Range Queries
   While not as straightforward as other use-cases, you can perform range queries with some client-side logic. For example, you can find out how many users logged in between a certain period by looking at a specific bit range in a bitmap representing logins over a time frame.

9. Geo-Fencing
   You can use bitmaps to represent areas in a geographical grid to quickly find out if a particular point lies within a certain area.

10. Image Processing
    Though not a common use case, some basic forms of image processing can be done using bitmaps. For example, you could use a bitmap to represent a monochrome image and perform operations like rotation or inversion.

Because bitmaps offer a compact, fast way to represent sets, they are a valuable tool for anyone using Redis for high-performance, real-time applications.

## Steps

1. Use the `SETBIT` command to set or clear the bit at offset `x` in the string.
2. Use the `GETBIT` command to retrieve the bit value at offset `x` in the string.
3. Use the `BITCOUNT` command to count the number of set bits (1s) in the string.

## Validation

Run `npm install` to install dependencies, then `npm start` to run the validation script.
