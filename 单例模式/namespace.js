let utils={};
utils.def=function (namespace,fn) {
    let namespaces=namespace.split('.');
    let fnName=namespaces.pop();
    let current=utils;
    for (let i=0;i<namespaces.length;i++){
        let namespace=namespaces[i];
        if (!current[namespace]) {
            current[namespace]={};
        }
        current=current[namespace];
    }
    current[fnName]=fn;
}
utils.def('dom.attr',function (key) {
    console.log('dom.attr');
});
utils.def('dom.html',function (html) {
    console.log('dom.html');
});
utils.def('string.trim',function () {
    console.log('string.trim');
});
utils.dom.attr('src');
utils.string.trim(' aaa ');
utils.dom.html(' html ');