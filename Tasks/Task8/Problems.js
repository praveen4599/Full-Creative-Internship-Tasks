function callback1() {
  console.log("Callback 1 called.");
}

function callback2() {
  console.log("Callback 2 called.");
}


setTimeout(callback1, 2000);
for (let i = 0; i < 3; i++) {
  setTimeout(callback2, i * 1000);
}

