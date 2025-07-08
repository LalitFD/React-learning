import { Component } from "react";
import "./Login.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            error: []
        };
    }

    validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    if() {

    }
    Addform = () => {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const userName = this.userInput.value;
        const password = this.passwordInput.value;
        const rp = this.repeatInput.value;
        const check = this.checkInput;

        let error = {};

        if (!name) {
            error.name = "*name is required"
        }

        // if (!name || !email || !userName || !password || !rp) {
        //     alert("Please fill all the fields");
        //     return;
        // }

        if (!this.validateEmail(email)) {
            error.email = "please give valid email"
        }

        if (password.length == 0) {
            error.password = "*password is required"
        }
        // else if (password.length > 6 && password.length < 10) {
        //     error.password = "*password should between 6 to 10"
        // }

        if (password !== rp) {
            alert("Password does not match Repeat Password");
            return;
        }

        if (!check.checked) {
            error.checkbox = "* please tick the checkbox"
        } else {
            this.setState({ error })

            const newUser = { name, email, userName, password };

            this.setState((prevState) => ({
                users: [...prevState.users, newUser],
            }));
        }




    };

    render() {
        return (
            <div className="container my-5">
                <div className="login-box">
                    <div className="image-box">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5-AsrvEBIuPK69udkKIT0ZvqkqYx5M83oQ&s"
                        />
                    </div>

                    <div className="form-box">
                        <h3>Sign Up</h3>
                        <form className="d-flex flex-column">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Name..."
                                ref={(ref) => (this.nameInput = ref)}
                            />
                            <small style={{ color: "red" }}>{this.state.error.name}</small>

                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Email..."
                                ref={(ref) => (this.emailInput = ref)}
                            />
                            <small style={{ color: "red" }}>{this.state.error.email}</small>

                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="Username..."
                                ref={(ref) => (this.userInput = ref)}
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="***********"
                                ref={(ref) => (this.passwordInput = ref)}
                            />
                            <small style={{ color: "red" }}>{this.state.error.password}</small>

                            <label>Repeat Password</label>
                            <input
                                type="password"
                                placeholder="***********"
                                ref={(ref) => (this.repeatInput = ref)}
                            />

                            <div className="checkbox-area">
                                <input type="checkbox" required ref={(ref) => (this.checkInput = ref)} />
                                <span>I agree to the terms of user</span>
                            </div>
                            <small style={{ color: "red" }}>{this.state.error.checkbox}</small>


                            <div>
                                <button type="button" onClick={this.Addform}>
                                    Sign Up
                                </button>

                                <button style={{ backgroundColor: "white", color: "black" }} onClick={this.Addform}>
                                    Sign In →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {this.state.users.length > 0 && (
                    <div className="mt-5">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white text-center">
                                <h5>Registered Users</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.password}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Login;
