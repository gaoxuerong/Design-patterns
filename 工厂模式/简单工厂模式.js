let h1 = <h1 className="title">hello</h1>
let h1 =React.createElement('h1',{className: 'title'},'hello')
// h1就是虚拟dom
function createElement(tagName,attrs,children) {
    return new VNode(tagName,attrs,children)
}
class VNode {
    constructor(tagName,attrs,children) {
        this.tagName = tagName
        this.attrs = attrs
        this.children = children
    }
}
//VNode
//简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例
//简单工厂模式不符合  开闭原则
//一般就是一个函数返回一个实例




class Plant{
    constructor(name) {
        this.name=name;
    }
    grow() {
        console.log('growing~~~~~~');
    }
}
class Apple extends Plant{
    constructor(name) {
        super(name);
        this.taste='甜';
    }
}
class Orange extends Plant{
    constructor(name) {
        super(name);
        this.taste='酸';
    }
}
class Factory{
    static create(name) {
        switch (name) {
            case 'apple':
                return new Apple('苹果');
            case 'orange':
                return new Orange('橘子');
        }
    }
}
let apple=Factory.create('apple');
console.log(apple);
let orange=Factory.create('orange');
console.log(orange);