// 对merger函数进行修改，是函数内部有递归

function merger(twoArr, left, mid, right, k) { //left是第几个的索引值，mid是右边有序的第一个索引值，right是右边最后一个索引值
    // 需要先分组在合并排序所以先递归，再从里往外执行
    const long = twoArr.length

    // 分组的关键是确定mid位置
    if (long % 2 === 0) {
        if (left < right - 1) {
            // merger中参数的关系twoArr（假设本次函数对数组的调整范围为数组作用域arrScope）；
            let arrScope = long / k
            k += 2
                // 左数组分割，此时left是父函数的left，right是父函数的mid-1
            merger(twoArr, left, mid - arrScope / 2, mid - 1, k) //scope=2

            // 右数组分割，此时left是父函数的mid，right是父函数的right
            merger(twoArr, mid, mid + arrScope / 2, right, k)
        }
    } else {
        if (left < right) {
            let arrScope = (long - 1) / k
            k += 2
                // 左数组分割，此时left是父函数的left，right是父函数的mid-1
            merger(twoArr, left, mid - Math.ceil(arrScope / 2), mid - 1, k) //scope=2

            // 右数组分割，此时left是父函数的mid，right是父函数的right
            merger(twoArr, mid, mid + Math.ceil(arrScope / 2), right, k)
        }
    }


    let oneArr = []
    let i = left
    let j = mid
    while (i < mid && j <= right) {
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
    while (i < mid) {
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

function mergerSort(unorderArr) {
    merger(unorderArr, 0, Math.ceil(unorderArr.length / 2), unorderArr.length, 2)
        // console.log(unorderArr);
    return unorderArr
}


mergerSort([7, 4, 8, 3, 3, 5, 7, 3, 25, 7, 9, 8, 0, 4])