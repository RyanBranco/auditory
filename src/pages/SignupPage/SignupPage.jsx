import React, {Component} from "react";
import { Link } from "react-router-dom";
import SignupForm from '../../components/SignupForm/SignupForm';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg})
    }

    render() {
        return (
            <div>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}


export default SignupPage;