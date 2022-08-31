function solution(n, lost, reserve) {
    let students = n-lost.length;
    let newLost = lost.filter(element => !reserve.includes(element)).sort((a,b) => a - b)
    let newReserve = reserve.filter(element => !lost.includes(element))
    students += lost.length - newLost.length;

    newLost.forEach(element => {
        if(newReserve.lenth === 0) {
            return;
        }
        
        if(newReserve.includes(element - 1)){
            newReserve = newReserve.filter(each => each !== element - 1);
            students += 1;
        } else if(newReserve.includes(element + 1)){
            newReserve = newReserve.filter(each => each !== element + 1)
            students += 1
        }
    })
    
    return students
}
