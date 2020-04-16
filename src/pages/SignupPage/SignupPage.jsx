import React, {Component} from "react";
import SignupForm from '../../components/SignupForm/SignupForm';
import "./SignupPage.css";
import Logo from "../../images/auditorylogodarkmodewithtext.png"

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
            <div id="signup">
                <header>sign up</header>
                <img id="SignupLogo" src={Logo} alt="dark mode logo"></img>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <div id="errormessage">
                    <p>{this.state.message}</p>
                </div>
            </div>
        )
    }
}


export default SignupPage;