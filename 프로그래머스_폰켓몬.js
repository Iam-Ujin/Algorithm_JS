function solution(nums) {
    const half = nums.length / 2;
    let newNums = [...new Set(nums)];
   
    return half > newNums.length ? newNums.length : half;
}
