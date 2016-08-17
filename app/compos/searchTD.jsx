var React = require("react"),
 {connect} = require("react-redux"),
 actions = require("actions")

export var SearchTD = React.createClass({
    // handSearch: function(){ //on change does not get passed event
    // console.log('search change')
    //     var shocomp = this.refs.shocomp.checked
    //     var searchtxt = this.refs.search.value
    //     this.props.onSearch(shocomp, searchtxt)
    //},


    render: function(){
        var {dispatch, shocomp, searchtxt} = this.props

        return (
            <div className='container__header'>
                <div>
                    <input onChange={()=>{
                        var searchtxt = this.refs.search.value
                        dispatch(actions.chngsearch(searchtxt))
                    }} 
                    type='search' ref='search' value={searchtxt} placeholder='Search todos' />
                </div>
                <div>
                    <label> <input type='checkbox' ref='shocomp' checked={shocomp} onChange= {()=>{
                        dispatch(actions.chngshocomp())
                        
                    }} /> Show Completed Todos? </label>

                </div>
            </div>
            )
    }
    
})

export default connect(
    (state)=>{
        return{
            shocomp : state.shocomp,
            searchtxt: state.searchtxt
        }
    }
    )(SearchTD)