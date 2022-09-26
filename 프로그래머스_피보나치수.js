```
[문제]
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

**제한 사항**
n은 2 이상 100,000 이하인 자연수입니다.
```;

function solution(n) {
  let dp = [0, 1];

  if (n < 2) {
    return dp[n];
  } else {
    for (let i = 2; i <= n; i++) {
      dp.push((dp[i - 1] + dp[i - 2]) % 1234567);
    }
  }

  return dp[n];
}
