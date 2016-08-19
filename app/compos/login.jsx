var React = require("react")
import * as Redux from 'react-redux'

import * as actions from 'actions'

export var Login = React.createClass({ //unconnected version
    onLogin(){
        console.log('login clicked')
        var {dispatch} = this.props
        dispatch(actions.startLogin())
    },
    render() {
        return (
            <div>
            <h1 className="pg-title"> Much Todos </h1>
             <div className="row">
                <div className="column small-centered small-10 medium-6 larg-4">
                    <div className="callout auth">
                        <h3> Login </h3>
                        <p> login with github below</p>
                        <button className="button" onClick={this.onLogin}> Login (GitHub) </button>
                    </div>
                </div>
             </div>
            </div>
            )
    }
})

export default Redux.connect()(Login);