import React from 'react';
import PropTypes from 'prop-types';

const validateLogin = (login = '') => {
    return login
        && login.length >= 3
        && login.length <= 10;
};

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            login: null
        };
    }

    static propTypes = {
        sendLogin: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        error: PropTypes.any
    };

    onLogin = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({error: null});
        if (validateLogin(login)) {
            this.props.sendLogin({login});
        } else {
            this.setState({
                error: 'Укажите логин, от 3 до 10 символов'
            });
        }
    };

    onLoginChange = (event) => {
        this.setState({login: event.target.value});
    };

    render() {
        return (<div className="container-login100">
            <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                <form className="login100-form validate-form flex-sb flex-w"
                      onSubmit={this.onLogin}>
                    <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                        <input className="input100"
                               onChange={this.onLoginChange}
                               type="text"
                               name="username"
                               disabled={this.props.loading}
                               value={this.state.value}
                               maxLength={10}
                               minLength={3}
                               placeholder="Enter login"/>

                        <button className="login100-form-btn"
                                disabled={this.props.loading}
                                type="submit">
                            OK
                        </button>
                    </div>
                    <div style={{color: '#d84e4e'}}>
                        {this.state.error}
                        {this.props.error}
                    </div>
                </form>
            </div>
        </div>);
    }
}
