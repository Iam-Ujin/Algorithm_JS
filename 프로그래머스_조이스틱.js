```
[문제]
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

```;
function solution(name) {
  let alphabet = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let changeNum = name.charCodeAt(i);

    if (changeNum < 78) {
      alphabet += changeNum - 65;
    } else {
      alphabet += 91 - changeNum;
    }

    let index = i + 1;
    while (index < name.length && name[index] == "A") index++;

    min = Math.min(min, i * 2 + name.length - index);
    min = Math.min(min, (name.length - index) * 2 + i);
  }

  return alphabet + min;
}
