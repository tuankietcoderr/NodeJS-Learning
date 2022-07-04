const EvenEmitter = require("events");
const customEmitter = new EvenEmitter();
customEmitter.on("response", (id) => {
  console.log(`Data received with ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Data received one more time`);
});

customEmitter.emit("response", 30);
