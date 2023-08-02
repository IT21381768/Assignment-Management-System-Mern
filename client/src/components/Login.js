import React, { Component } from 'react';
import { login } from './UserFunctions'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this); //binds the function to the constructor
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }) //sets the state of the targetted name to the value
    }

    onSubmit(e) {
        e.preventDefault() //prevents the page from reloading
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }



    render() {
        return (
            <div className='container'>
                <h2>
                    <div className='row'>
                        <div className='col-md-6 mt-5 mx-auto'>
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email Address</label>
                                    <input type='email'
                                        className='form-control'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={this.state.email}
                                        onChange={this.onChange} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password'
                                        className='form-control'
                                        name='password'
                                        placeholder='Enter Password'
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                </div>
                                <button type='submit'
                                    className='btn btn-lg btn-primary btn-block'>
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </h2>
            </div>
        );
    }
}


export default Login;