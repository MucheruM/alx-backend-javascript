#!/usr/bin/env node
/*
  A program that handles input and output
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (username) => {
    process.stdout.write(`Your name is: ${username.toString().trim()}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
});
