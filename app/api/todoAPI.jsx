var $ = require("jquery")

module.exports = {
    /*
    setTodos: function(todos){
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function(){
        var todosStr = localStorage.getItem('todos')
        var todos = []
        try{ todos = JSON.parse(todosStr)}
        catch(e){
            console.log(e)
        }
        
        return $.isArray(todos) ? todos : []
    //   if ($.isArray(todos)){ //check if malicious data inputted 
    //       return todos
    //   }else{return []}
    // this is the same as the ternary operator 
    },
    
    */
    filter: function(todos, shocomp, searchtxt){
        var filtered = todos
        filtered = filtered.filter((todo)=>{return !todo.done || shocomp}) // return if todo is done or shocomp is true
        
        
        filtered=filtered.filter((todo) => {
                
            var txt = todo.txt.toLowerCase()
            return searchtxt.length===0 || txt.indexOf(searchtxt) > -1
        })
        
        filtered.sort((a,b)=>{
            if (!a.done && b.done) {
                return -1
            }else if(a.done && !b.done){
                return 1
            }else{return 0}
        })

        
        return filtered 
    }
}