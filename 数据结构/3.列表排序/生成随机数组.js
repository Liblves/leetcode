function randomArr(min,max,length) {
    let arr = []
    for(let i = 0;i < length;i++){
        let randomNum = Math.random()*(max-min+1)+min
        arr.push(Math.floor(randomNum))
    }
    console.log(arr);
    return arr
}
console.log("random引入");