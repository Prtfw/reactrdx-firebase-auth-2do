var React = require("react"),
    uuid = require("node-uuid"),
    moment = require("moment")
    

 
    
    //todoApi = require("todoAPI")
    
    import Add2do from "addTD"
    
    import Todos from "todos"
    
    import SearchTD from "searchTD"
    //SearchTD = require("searchTD"),
    
var main2do = React.createClass({
    /*getInitialState: function(){   //does not handle state because of redux
      return{
            todos: todoApi.getTodos(),
            shocomp: false,
            searchtxt: ''
      }  
    },
    componentDidUpdate: function(){           //handle with redux
        todoApi.setTodos(this.state.todos)
    },
    handAdd2do: function(text) { //static version that pretends to add state to make sure add form works // now being handled by reducers
      // alert('new 2do' + txt)
       /* var ind = this.state.todos.length +1
       var newTodo= {
           id: uuid(),
           txt: txt
       }
      
       console.log(newTodo)
      var oldTodos = this.state.todos
      console.log(oldTodos)
      var newTodos = []
      newTodos = oldTodos.push(newTodo)
      
      //console.log(newTodos[ind-1])
      /*this.setState({
         todos: newTodos
      })
      console.log(this.state.todos)
      
      
      this.setState({
          todos: [
              ...this.state.todos, 
              {id:uuid(), txt:text,  done: false, madeDate: moment().unix(), doneDate: undefined }
              ]
      })
    },
    // handToggle: function  (tid)  { //handled by reducers

        
    //     var updTodos = this.state.todos.map((todo)=>{
    //         if (todo.id === tid){
    //             todo.done = !todo.done
    //             todo.doneDate =  moment().unix()
    //         }

    //         return todo;
    //     })
    //     //alert(id)
    //     this.setState({
    //         todos: updTodos
    //     })
    // },
     handSearch: function  (shocomp, searchtxt)  {   //handled by reducers
        console.log(shocomp, searchtxt)
        this.setState({
            shocomp: shocomp,
            searchtxt: searchtxt.toLowerCase()
        })
    },
    
     */
    render: function(){
        //console.log('in tdapp', this.handAdd2do)
        // var {todos, shocomp, searchtxt} = this.state
        // var filtered = todoApi.filter(todos, shocomp, searchtxt) // now happens in todo list
    return(
        <div>
            <h1 className = 'pg-title'> Much Todos </h1>
                <div className = 'row'>
                    <div className= 'column small-centered small-11 medium-6 large-4'>
                        <div className='container'>
                        <SearchTD  /> {/* onSearch ={this.handSearch} */}
                        <Todos  /> {/* todos={filtered} onToggle={this.handToggle} */}
                        <Add2do />  {/* handAdd2do={this.handAdd2do} */}
                        </div>
                    </div>
                </div>
        </div>
        )
        
    }
})


module.exports = main2do