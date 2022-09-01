function solution(sizes) {
    let width = [];
    let height = [];
    
    sizes.map(each => {
        let [w, h] = each;
        
        if(w > h) {
            const temp = w;
            w = h;
            h = temp;
        }
        
        width.push(w);
        height.push(h);
    });
    
    const answer = Math.max(...width) * Math.max(...height);
    return answer;
}
