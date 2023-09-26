const print = (c) => process.stdout.write(c);
const beep = '\x07';
const args = process.argv.slice(2);
const seconds = 1000;
let times;

if (args) {
   times = args.map(a => Number(a));
} else {
  console.log("invalid args");
  process.exit(1);
}

for (let time of times) {
  if (time > 0) {
    setTimeout(() => print(beep), time * seconds);
  }
}

