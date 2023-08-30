RDB stands for 'Redis Database Backup'

An RDB is a point in time snap shot of your database saved on disk as a file.

- Forked process to the main instance can continue.

- Can be configured to take snapshots based on number of keys changed or time elapsed.

- Can be dataloss as it's point in time

- It's portable so can populate other redis instances provided it's using the same version.

- Snapshot can be forced at any time using SAVE (which will block the server) or BGSAVE command which does it in the background.
