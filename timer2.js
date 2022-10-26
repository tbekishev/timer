const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  if (key === 'b')
    process.stdout.write('\x07');
  key = parseInt(key);
  if (key > 0 && key < 10) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});