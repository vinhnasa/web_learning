let value1 = 'one';
let value2 = 'two';

console.log('original', value1);
console.log('original', value2);

let tempt = value1;
value1 = value2;
value2 = tempt;

console.log('swap', value1);
console.log('swap', value2);
// useful-spark.surge.sh