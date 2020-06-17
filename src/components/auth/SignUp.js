import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handeSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handeSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="first-name">First Name</label>
                        <input onChange={this.handleChange} type="text" id="first-name"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input onChange={this.handleChange} type="text" id="last-name"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                    </div>   
                </form>
            </div>
        )
    }
}

export default SignUp;
