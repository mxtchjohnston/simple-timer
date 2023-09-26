const print = (c) => process.stdout.write(c);
const beep = '\x07';
const seconds = 1000;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  if (key === '\u0003') {
    print("Thanks for using me, ciao!\n");
    process.exit();
  }

  if (key === 'b') {
    print('beep\n' + beep);
  }

  const num = Number(key);

  if (!Number.isNaN(num)) {
    print(`setting timer for ${num} seconds..."\n`);
    setTimeout(() => print(beep), num * seconds);
  }
});
