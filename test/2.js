/* 
马上就要开学了，教务处的老师拿到了新生的名单，现在他需要根据考生的姓名录入一个拼音版的新名单。

老师录入时，需要输入姓和名(例如：ZHANG SAN，字母均为大写，姓名以空格隔开)，并且要将这些人按一定规则排序。

排序的方式如下：

首先，按照该姓的出现次数排序，即：姓出现次数多的人先排序

其次，若两个人的姓出现的次数一样多（或者是同一个姓），按照原名单的顺序。

输入
输入包括多行，每一行两个字符串，代表一个人的姓和名
输出
输出排序后的名单
*/
/* 姓出现次数最多 */
var name = ['ZHANG SAN', 'LI SI', 'WANG WU', 'WANG LIU', 'WANG QI', 'ZHANG WU', 'LI WU'];
function sortName(name) {
    // console.log(name[0].slice(0,5));//ZHANG
    /* 1. 找出所有姓氏并计数 */
    var o = {} // 存储每个姓氏对应的名字
    for (var i = 0; i < name.length; i++) {
        var item = name[i];
        var firstNameIndex = item.indexOf(" ");
        var firstName = item.slice(0, firstNameIndex);
        // console.log(firstName);    
        if (o[firstName]) {
            o[firstName].push(item);
        } else {
            o[firstName] = [item] ;
        }
    }
    console.log(o);
    /* 2. 姓氏按数量排序 */
    var sortedName = [];
    for(var key in o) {

    }
}
sortName(name);