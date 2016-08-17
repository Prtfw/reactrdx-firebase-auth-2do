var React = require("react")
import Todo from 'todo'
var {connect} = require("react-redux") //provider companion 

var todoApi = require("todoAPI")


export var Todos = React.createClass({
        render: function(){
            var {todos, shocomp, searchtxt} = this.props //since using redux... nothing is getting passed to the prop
            console.log(todos, shocomp, searchtxt)
            var renderTodos = () => {
               // console.log("in todo map")
                  if (todos.length <1) {
                      return (<p className='container__msg'> Free and clear, my friend! </p>)
                  }
                  else{
                  
                return todoApi.filter(todos, shocomp, searchtxt).map((todo)=> {
                console.log('should show', todoApi.filter(todos, shocomp, searchtxt))
                    return(
                        <Todo   key={todo.id} {...todo} />  //{/*onToggle={this.props.onToggle}*/}
                        
                        )
                })}
            };
            return (
                
                <div>
                    {renderTodos()}
                </div>
                
                )
        }
})

export default connect(
    (state)=>{
        return state //this is is now on the props of Todos
    }
    )(Todos)