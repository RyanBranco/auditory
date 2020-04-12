import React, {Component} from "react";
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from "./SignupPage.module.css";
import Logo from "../../images/auditorylogodarkmode.png"

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
            <div id={styles.signup}>
                <header>sign up</header>
                <img src={Logo} alt="dark mode logo"></img>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p id={styles.errormessage}>{this.state.message}</p>
            </div>
        )
    }
}


export default SignupPage;