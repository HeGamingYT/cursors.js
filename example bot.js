const cursorsjs = require("cursors-js");

const cjs = new cursorsjs.cjs({ws: "ws://159.65.78.102:2828", origin: "http://cursors.io"})


cjs.on("gotId", function(){
	console.log("Connected. Your id is " + cjs.id);
	cjs.enableConsoleControl()
	cjs.move(300, 175) // first level
})
cjs.on("close",  function(){
	console.log("Disconnected")
})
