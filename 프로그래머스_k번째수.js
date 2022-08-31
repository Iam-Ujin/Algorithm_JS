function solution(array, commands) {
    return answer = commands.map(command => {
        const [firstIdx, lastIdx, curIdx] = command;
        const newArray = array.slice(firstIdx - 1, lastIdx).sort((a, b) => {return a - b})
        
        return newArray[curIdx - 1]
        })
}
