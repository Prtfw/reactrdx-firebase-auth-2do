var React = require("react"),
    moment = require("moment"),
    {connect} = require("react-redux"),
    actions = require("actions")

export var Todo = React.createClass({ //export for the test file

        render: function(){
            var {id, txt, done, madeDate, doneDate, dispatch} = this.props //this works because the {...'todo'} spread operator... 
            //the props of todo are passed down as individual properties 'MMMM Do, YYYY @ h:mm A'
            
            var todoClass= done ? 'todo todo_done' : 'todo'
            var shodate =()=>{
                var msg = 'created'
                var shoDate = moment.unix(madeDate).utcOffset(-5).format('Do/MMM @ h:mm a')
                
                if (done){
                    msg = 'completed'
                    shoDate = moment.unix(doneDate).utcOffset(-5).format('Do/MMM @ h:mm a')
                }
                return  msg+ ' @ ' + shoDate
            }
            return (
                <div  className={todoClass} onClick={()=>{dispatch(actions.startdoneTD(id, !done))}} >     {/*{this.props.onToggle(id)}*/}
                <div>  <input onClick={this.handClick} type='checkbox' checked={done} /></div>
                <div>
                <p>{txt}</p> 
                <p className='todo_subtxt'> {shodate()} </p>
                </div>

                </div>
                
                )
        }
})


export default connect()(Todo) //only data needs a return ... just connect give access to dispatch on props
//export default = if require this is what you actually get
//i.e. var varname = require('this file')  you get the default... for other exports use varname.otherexportName
 
//module.exports = 