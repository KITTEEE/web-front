/* 在 node 中，使用 module.export 和 exports 来导出， require来接收  */
/* ES6 中，可以使用 export / export default 来导出，import 来导入 */
/* export 和 export default 使用时的注意事项
    1. export defaut 在一个模块中只能导出一次
    2. export 可以导出多次，使用 export 导出时只能使用对象的形式接收： import {title,content} from 'test.js'
    3. export 导出的对象需要使用别名，可以在 import 时用 as 来指定别名： import {title as title123,content} from 'test.js'
    4. 在一个模块中，可以同时使用 export default 和 export 来导出模块成员

*/
export default {
    title:123,
    content:'456'
}
/* export 只能使用一次 */
// export default {
//     message:789
// }
export var message1 = 789;
export var message2 = 357;