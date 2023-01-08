```
[문제]
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```;

function getGCD(num1, num2) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

function solution(denum1, num1, denum2, num2) {
  var answer = [0, 0];

  answer[0] = num1 * denum2 + num2 * denum1;
  answer[1] = num1 * num2;

  let gcd = getGCD(answer[0], answer[1]);

  return [answer[0] / gcd, answer[1] / gcd];
}
