/* 
    类与继承
*/

// before
// function Animal1(name) {
//     this.name = name;
// }
// Animal1.prototype.showName = function () { 
//     console.log(this.name);
// }
// var a = new Animal1('spike');
// a.showName();

// -----------------------------------

// es6
class Animal2 {
    // 静态方法 (只能通过类名调用，不能通过实例对象调用)
    static showInfo() {
        console.log('hi');
    }

    // 构造函数
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
let b = new Animal2('spike');
b.showName();
// b.showInfo(); // b.showInfo is not a function
Animal2.showInfo();

// 类的继承 extends
class Dog extends Animal2 {
    constructor(name,color) {
        super(name); // 用来调用父类的构造方法
        this.color = color;
    }
    showColor() {
        console.log(this.color);
    }
}
let d = new Dog('Tom','red');
d.showName();
d.showColor();
// d.showInfo(); // d.showInfo is not a function
Dog.showInfo();

