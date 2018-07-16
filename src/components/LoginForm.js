import React from 'react';
import firebase from 'firebase';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: "",
            success: ""
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit() {
        const { email, password } = this.state;
        this.setState({error: "", success: ""});
        const goingEmail = `${email}@3ayez.com`;
        firebase.auth().signInWithEmailAndPassword(goingEmail, password)
            .then(() => {
                this.setState({
                    success: "Successfully Logged in"
                });
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(goingEmail, password)
                    .then(() => {
                        this.setState({
                            success: "Successfully Created New Account"
                        })
                    })
                    .catch(() => {
                        this.setState({ error: "Authentication Failed" });
                    })
            })
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePassword}
                    />
                </label>
                <input type="submit" onClick={this.handleSubmit} />
                <br/>
                <div>
                    { this.state.success }
                    { this.state.error }
                </div>
            </div>
        );
    }
}

export default LoginForm;