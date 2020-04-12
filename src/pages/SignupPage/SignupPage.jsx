import React, {Component} from "react";
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from "./SignupPage.module.css";
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
            <div id={styles.signup}>
                <header>sign up</header>
                <img id={styles.SignupLogo} src={Logo} alt="dark mode logo"></img>
                <SignupForm {...this.props} 
                updateMessage={this.updateMessage} 
                />
                <div id={styles.errormessage}>
                    <p>{this.state.message}</p>
                </div>
            </div>
        )
    }
}


export default SignupPage;