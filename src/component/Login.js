import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../Redux/Action';
import { Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
       
        let payload = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.login(payload)
        
    }
    render() {
     
        const {isAuth} = this.props
        
        return isAuth?
        (
            <Redirect to='/dashboard' />
        ):
        
        ( 
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    User Name :<input type="text" class="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Password :<input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success mt-3">Login</button>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})
const mapDispatchToProps = dispatch => ({
    login:payload => dispatch(loginUser(payload))
})
export default connect (mapStateToProps, mapDispatchToProps) (Login)