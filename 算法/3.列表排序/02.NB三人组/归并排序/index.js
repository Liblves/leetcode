// 如果安装了VScode没有进行一定的配置，
// node-moudles下面所需调用的js文件模块不在index.js里面则会报错
// 找不到模块，因为nodejs默认会找node-moudles里面的index.js。
// 这时候我们通过该模块所在的文件夹路径进入cmd，
// 输入npm init --yes，会执行安装一个(文件路径为英文)


// 原数组必须都是升序，要求排成升序
// const mergerScor = {
function merger(twoArr, left, mid, right) { //left是第几个的索引值，mid是左边有序的最后一个索引值，right是右边最后一个索引值
    let oneArr = []
    let i = left
    let j = mid + 1
    while (i <= mid && j <= right) {
        if (twoArr[i] > twoArr[j]) { //小的留下，并且索引自增一
            oneArr[oneArr.length] = twoArr[j]
            j++
        } else { //一样大则i留下，自增一
            oneArr[oneArr.length] = twoArr[i]
            i++
        }
    }
    // 确定剩余数组位置
    //第一段数组有剩余
    while (i <= mid) {
        //当j到末尾时，说明当前的i还未赋值，正好继续
        oneArr[oneArr.length] = twoArr[i]
        i++
    }
    //第二段有数
    while (j <= right) {
        // 当i到末尾时，说明当前的j还未赋值，正好继续
        oneArr[oneArr.length] = twoArr[j]
        j++
    }
    for (let i = left; i <= right; i++) {
        twoArr[i] = oneArr[i - left] //oneArr与twoArr索引不是一一对应，oneArr只是需要排序的数组成的
    }
    console.log(twoArr);
    return twoArr
}
// }
// merger([6, 7, 8, 1, 2, 3, 4, 5], 2, 3, 4)

function mergerSort(unorderArr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2)
        mergerSort(unorderArr, left, mid)
        mergerSort(unorderArr, mid + 1, right)
        merger(unorderArr, left, mid, right)
    }
    return
}

mergerSort([3, 4, 6, 7, 9, 8, 5, 4, 3, 5], 0, 9)