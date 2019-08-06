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