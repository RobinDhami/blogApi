const readline = require('readline');

function findPairsWithSum(nums, target) {
  const pairs = [];
  const visited = new Set();

  for (let num of nums) {
    const difference = target - num;

    if (visited.has(difference)) {
      pairs.push([num, difference]);
    }

    visited.add(num);
  }

  return pairs;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array inputs separated with comma: ', (inputs) => {
  const nums = inputs.split(',').map(num => parseInt(num.trim(), 10));

  rl.question('Enter target sum: ', (sumTarget) => {
    const target = parseInt(sumTarget.trim(), 10);

    const pairs = findPairsWithSum(nums, target);

    if (pairs.length > 0) {
      console.log('Pairs found:');
      pairs.forEach(pair => {
        console.log(`(${pair[0]}, ${pair[1]})`);
      });
    } else {
      console.log('Pairs not found.');
    }

    rl.close();
  });
});
