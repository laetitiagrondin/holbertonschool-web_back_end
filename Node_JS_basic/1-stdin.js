process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
