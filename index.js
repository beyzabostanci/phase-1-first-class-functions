
function receivesAFunction (callback){
    callback()
}
function returnsANamedFunction(){
    return function named(){
     console.log('returns a named function')
    }
}
function returnsAnAnonymousFunction(){
   return function(){
       console.log('returns an anonymous function')
}};