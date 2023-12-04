const readline = require('readline');

function findPairWithSum(nums, target) {
  const visited = new Set();

  for (let num of nums) {
    const difference = target - num;

    if (visited.has(difference)) {
      return [num, difference];
    }

    visited.add(num);
  }

  return null;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter array inputs separated with comma: ', (inputs) => {
  const nums = inputs.split(',').map(num => parseInt(num.trim(), 10));

  rl.question('Enter target sum: ', (sumtarget) => {
    const target = parseInt(sumtarget.trim(), 10);

    const pair = findPairWithSum(nums, target);

    if (pair) {
      console.log(`Pair found: (${pair[0]}, ${pair[1]})`);
    } else {
      console.log('Pair not found.');
    }

    rl.close();
  });
});
