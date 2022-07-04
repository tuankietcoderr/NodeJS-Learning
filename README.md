# Backend/Fullstack

- Node and Express Fundamentals

- Complex REST API

- MERN App

- More Projects

- Node Fundamentals

- Express.js

- MongoDB, Mongoose

- Applications

- Deployment

# What is NodeJS ?

- Environment to run JS outside Browser

- Built on Chrome's V8 JS Engine

- Big Community

- Full-stack

# Requirements

- HTML, CSS, JS, ES6

- Callback, Promises, Async/Await

- Playlist - JS Nuggets

# Browser vs Nodejs

| Browser          | Nodejs           |
| ---------------- | ---------------- |
| DOM              | No DOM           |
| Window           | No Window        |
| Interactive Apps | Server Side Apps |
| No Filesystem    | Filesystem       |
| Fragmentation    | Versions         |
| ES6 Modules      | CommonJS         |

# Built-in Modules

1. OS
2. PATH
3. FS
4. HTTP

# Event Loop

## What is the Event Loop?

- The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that Javascript is single-threaded - by offloading operations to the system kernel whenever possible.
- Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

## Event Loop Explained

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the `REPL`, which is not covered in this document) which may make async API calls, schedule timers, or call `process.nextTick()`, then begins processing the event loop.

# Async Patterns

1. Blocking Code

```
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
    res.write(`${i}-${j}\n`);
    }
}
res.end();
```

2. Setup Promises

```
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

getText("../content/subfolder/test3.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

3. Refactor to Async

```
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const start = async () => {
  try {
    const first = await getText("../content/subfolder/test.txt");
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
start();
```

4. Node's Native Option

```
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise(
      "../content/subfolder/test.txt",
      "utf-8"
    );
    await writeFilePromise(
      "../content/subfolder/result_async.txt",
      `This is awesome: ${first}`,
      { flag: "w" }
    );
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
start();
```

# Events

- Event-Driven Programming
- Used Heavily in Node.js
  - `on` - listen for an event
  - `emit` - emit an event

# Streams

1. Writeable
2. Readable
3. Duplex
4. Transform
