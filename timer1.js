const newArgs = process.argv.slice(2);
for (let i = 0; i < newArgs.length; i++) {
  newArgs[i] = Math.floor(newArgs[i]);
  if (typeof newArgs[i] === 'number' || newArgs[i] > 0 || newArgs[i] !== '') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, newArgs[i]);
  }
}