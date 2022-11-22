let x = 100;
const array = ["|","/","-","\\","|","/","-","\\","|"];
for (let sym of array) {
  setTimeout(() => {
    process.stdout.write(`\r${sym}   `)}, x);
  x += 200;
};