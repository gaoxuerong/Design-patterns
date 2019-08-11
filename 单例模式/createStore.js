let createStore = function(reducer) {
    let state = '';
    let listeners = [];
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state,action)
        listeners.forEach((func)=>{
            func()
        })
    }
    function subscribe(listener){
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((item)=>{return item != listener})
        }
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}
let store = createStore()