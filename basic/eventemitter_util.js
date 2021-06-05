var events = require("events");
var util = require("util");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("someFunc", function (mssg) {
//   console.log("The message is: " + mssg);
// });

// myEmitter.emit("someFunc", "The emitter worked successfully..!");

var person = function (name) {
  this.name = name;
};

util.inherits(person, events.EventEmitter);

var Ank = new person("Ank");
var Zain = new person("Zain");
var Ryu = new person("Ryu");

Ank.on("speak", function (mssg) {
  console.log("Ankit spoke: " + mssg);
});
Ank.emit("speak", "Hi..!! My name is Ankit.");

Zain.on("shout", function (mssg) {
  console.log("Zain shouted: " + mssg.toUpperCase());
});

Zain.emit("shout", "Shut up Ankit!!");
