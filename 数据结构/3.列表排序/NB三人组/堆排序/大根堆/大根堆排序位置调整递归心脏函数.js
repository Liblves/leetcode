// 建立堆（农村包围城市）

// 堆中父结点与左子结点索引关系：i => 2i+1
// 堆中父结点与右子结点索引关系：i => 2i+2
// 子结点与父结点索引关系：j => (j-1)/2 向下取整

// 此处建立大根堆

// 提醒：此处此处用递归使子与父交换后，在与孙节点比较
// 提醒：此处此处用递归使子与父交换后，在与孙节点比较
// 提醒：此处此处用递归使子与父交换后，在与孙节点比较

//大根堆排序位置调整心脏函数

function nodeGoing(arr, i, depth) { //此处i为子结点索引
    let whichNode
    if (i % 2 === 0) { //判断是左右哪个子结点
        whichNode = 2 //右子结点循环两次
    } else {
        whichNode = 1 //左子结点循环一次
    }
    while (i > 0 && whichNode > 0 && arr[i] < arr[Math.floor((i - 1) / 2)]) { //当子结点大于父结点或i=0时结束循环
        i--
        whichNode--
    }
    if (whichNode > 0) { //保证兄弟节点遍历完成后立刻退出
        if (whichNode === 2) { //如果你既是右结点，而且右结点比父结点大，那么再监测一下你的亲兄弟结点
            if (arr[i] > arr[i - 1]) {
                let num = arr[i] //当i=0时，while循环结束，此时arr[0]=arr[0]不影响
                arr[i] = arr[Math.floor((i - 1) / 2)]
                arr[Math.floor((i - 1) / 2)] = num
                if ((2 * i + 2) <= depth) { //如果你有右子节点你就先找右子结点，如果没有，那你有左子结点吗
                    nodeGoing(arr, (2 * i + 2), depth)
                } else if ((2 * i + 1) <= depth) {
                    nodeGoing(arr, (2 * i + 1), depth)
                }
            } else { //此时是左子结点与父结点交换所以要i--，且退出递归时下次循环也跳过了该结点
                i--
                let num = arr[i] //当i=0时，while循环结束，此时arr[0]=arr[0]不影响
                arr[i] = arr[Math.floor((i - 1) / 2)]
                arr[Math.floor((i - 1) / 2)] = num
                if ((2 * i + 2) <= depth) { //如果你有右子节点你就先找右子结点，如果没有，那你有左子结点吗
                    nodeGoing(arr, (2 * i + 2), depth)
                } else if ((2 * i + 1) <= depth) {
                    nodeGoing(arr, (2 * i + 1), depth)
                }
            }
        } else {
            let num = arr[i] //当i=0时，while循环结束，此时arr[0]=arr[0]不影响
            arr[i] = arr[Math.floor((i - 1) / 2)]
            arr[Math.floor((i - 1) / 2)] = num
            if ((2 * i + 2) <= depth) { //如果你有右子节点你就先找右子结点，如果没有，那你有左子结点吗
                nodeGoing(arr, (2 * i + 2), depth)
            } else if ((2 * i + 1) <= depth) {
                nodeGoing(arr, (2 * i + 1), depth)
            }
        }
        return arr
    }
    return arr
}