function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function cat(){};
}
function returnsAnAnonymousFunction(){
    return (function(){
        return "Stretch! Work that core!"
    })
}