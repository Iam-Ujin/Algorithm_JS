```
[문제]
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
```;

function solution(numbers, target) {
  let answer = 0;
  // 2차배열을 만들어 numbers의 첫번째 요소의 값과 인덱스값인 0을 넣어주었다.
  let queue = [
    [numbers[0], 0],
    [-numbers[0], 0],
  ];
  let n = numbers.length;

  while (queue.length !== 0) {
    let [number, idx] = queue.pop();
    idx += 1;

    // 인덱스 번호가 numbers의 길이보다 작으면 인덱스번호에 + 1을 해주고, numbers의 다음요소를 더한 배열과 뺀 배열을 각각 push해주었다.
    if (idx < n) {
      queue.push([number + numbers[idx], idx]);
      queue.push([number - numbers[idx], idx]);
    } else {
      // 만약 인덱스 번호가 numbers의 길이보다 같거나 크고 현재 값이 target값과 같다면 answer에 +1을 해주었다.
      if (number === target) {
        answer += 1;
      }
    }
  }
  return answer;
}
