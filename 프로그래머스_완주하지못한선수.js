function solution(participant, completion) {
    let hash = [];
   
    participant.map(each => {
        hash[each] = hash[each] ? hash[each] + 1 : 1;
    })
    completion.map(each => {
    hash[each] = hash[each] - 1;
    })
    
    for(let person in hash){
        if(hash[person] === 1) return person
    }
}
