// 建立堆（农村包围城市）

// 堆中父结点(i)与左子结点索引关系：i => 2*i+1
// 堆中父结点(i)与右子结点索引关系：i => 2*i+2
// 子结点(j)与父结点索引关系：j => (j-1)/2 向下取整

// 此处建立大根堆

// 提醒：此处此处用递归使子与父交换后，在与孙节点比较
// 提醒：此处此处用递归使子与父交换后，在与孙节点比较
// 提醒：此处此处用递归使子与父交换后，在与孙节点比较

//大根堆排序位置调整心脏函数

function nodeGoing(arr, i, depth) { //此处i为需要调整的树的根结点
    let num = arr[i]
    let j = 2 * i + 1
    while (j <= depth) { //arr[j]是左结点
        if (j + 1 <= depth && arr[j] < arr[j + 1]) {
            j = j + 1
        }
        if (num < arr[j]) {
            arr[i] = arr[j]
            i = j
            j = 2 * i + 1
        } else {
            arr[i] = num //此时i是num的子结点都是比num小的num的索引
            break
        }
    }
    arr[i] = num //此时i是叶子结点的索引
}