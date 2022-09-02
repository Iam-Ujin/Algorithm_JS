function solution(s){
    let stack = [...s]
    let left = 0;

		if (stack[0] === ")") {
        return false;
    }

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === "(") {
            left += 1;
        } else {
            left -= 1;
        }
        if (left < 0) {
            return false;
        } 
    }
    
    return left === 0;

}
