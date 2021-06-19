const eventEmmiter = require("events");

const emitter = new eventEmmiter();

emitter.on("event", (args) => {
  console.log("First callBack!!!!!!!!!!!!!!", args);
});
emitter.on("event", (args) => {
  console.log("Second callBack~~~~~~~~~~~~~", args);
});

emitter.emit("event", { name: 1 });
emitter.emit("event", { name: 2 });
emitter.emit("event", { name: 3 });
