import React, {Component} from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pw: ""
        }
    }

    render() {
        return (
            <div>
                <p>Login!</p>
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}


export default LoginPage;