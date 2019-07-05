import React, { Component } from 'react';
import './Header.css';
import Fastfood from '@material-ui/icons/Fastfood';
import Search from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props) {
    return(
    <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
        {props.children}
    </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class Header extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            value: 0,
            loginContactno: "",
            loginContactnoRequired: "dispNone",
            loginpassword: "",
            loginpasswordRequired: "dispNone",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            emailError: "",
            password: "",
            passwordRequired: "dispNone",
            passwordError: "",
            contactno: "",
            contactnoRequired: "dispNone",
            contactnoError: ""
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
        this.setState({loginContactnoRequired: "dispNone"});
        this.setState({value: 0})
    };

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    };

    tabChangeHandler = (event, value) => {
        this.setState({value});
    };

    loginClickHandler = () => {
        this.state.loginContactno === "" ? this.setState({loginContactnoRequired: "dispBlock"}) : this.setState({loginContactnoRequired: "dispNone"});
        this.state.loginpassword === "" ? this.setState({loginpasswordRequired: "dispBlock"}) : this.setState({loginpasswordRequired: "dispNone"});
    }

    inputLoginContactnoHandler = (e) => {
        this.setState({loginContactno: e.target.value});
    }

    inputLoginpasswordHandler = (e) => {
        this.setState({loginpassword: e.target.value});
    }

    signupClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
        this.state.contactno === "" ? this.setState({contactnoRequired: "dispBlock"}) : this.setState({contactnoRequired: "dispNone"});

        /*if (this.state.password === "") {
            this.setState({passwordRequired: "dispBlock"});
            this.setState({passwordError: "required"});
        } else if (this.state.password.toString().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,32}$/i) === null) {
            this.setState({passwordRequired: "dispBlock"});
            this.setState({passwordError: "Password must contain at least one capital letter, one small letter, one number, and one special character"});
        } else {
            this.setState({passwordRequired: "dispNone"});
            this.setState({passwordError: ""});
        }

        if (this.state.email === "") {
            this.setState({emailRequired: "dispBlock"});
            this.setState({emailError: "required"});
        } else if (this.state.email.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            this.setState({emailRequired: "dispBlock"});
            this.setState({emailError: "Invalid Email"});
        } else {
            this.setState({emailRequired: "dispNone"});
            this.setState({emailError: ""});
        }*/

        //Contact No. must contain only numbers and must be 10 digits long
        if (this.state.contactno === "") {
            this.setState({contactnoRequired: "dispBlock"});
            this.setState({contactnoError: "required"});
        } else if (this.state.contactno.toString().match(/^(?=.*\d).{10,10}$/i) === null) {
            this.setState({contactnoRequired: "dispBlock"});
            this.setState({contactnoError: "Contact No. must contain only numbers and must be 10 digits long"});
        } else {
            this.setState({contactnoRequired: "dispNone"});
            this.setState({contactnoError: ""});
        }
    }

    inputFirstnameHandler = (e) => {
        this.setState({firstname: e.target.value});
    }

    inputLastnameHandler = (e) => {
        this.setState({lastname: e.target.value});
    }

    inputEmailHandler = (e) => {
        this.setState({email: e.target.value});
    }

    inputPasswordHandler = (e) => {
        this.setState({password: e.target.value});
    }

    inputContactnoHandler = (e) => {
        this.setState({contactno: e.target.value});
    }

    render() {  
        return(
            <div>
                <header className="app-header flex-container">
                    <div className="app-logo"> 
                        <Fastfood style={{fontSize: "35px"}}/>
                    </div>
                    <div className="searchbox">
                        <Search />
                        <Input style={{color: "grey"}} type="text" placeholder="Search by Restaurant Name" onChange={this.props.searchChangeHandler}/>
                    </div>
                    <div className="login">
                        <Button variant = "contained" color = "default" className="login-btn" onClick={this.openModalHandler}>
                            <AccountCircle className="account-circle"/>LOGIN
                        </Button>
                    </div>
                </header>

                <Modal  ariaHideApp={false} 
                        isOpen={this.state.modalIsOpen} 
                        contentLabel='LOGIN' 
                        onRequestClose={this.closeModalHandler}
                        style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler} variant="fullWidth">
                        <Tab label="LOGIN" />
                        <Tab label="SIGNUP" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="loginContactno">Contact No.</InputLabel>
                            <Input id="loginContactno" type="text" className={this.state.loginContactno} onChange={this.inputLoginContactnoHandler}/>
                            <FormHelperText className={this.state.loginContactnoRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="loginpassword">Password</InputLabel>
                            <Input id="loginpassword" type="password" className={this.state.password} onChange={this.inputLoginpasswordHandler} />
                            <FormHelperText className={this.state.loginpasswordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" className={this.state.firstname} onChange={this.inputFirstnameHandler} />
                                <FormHelperText className={this.state.firstnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" className={this.state.lastname} onChange={this.inputLastnameHandler} />
                            </FormControl>
                            <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" className={this.state.email} onChange={this.inputEmailHandler} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red">{this.state.emailError}</span>
                                </FormHelperText>
                            </FormControl>
                            <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" className={this.state.password} onChange={this.inputPasswordHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">{this.state.passwordError}</span>
                                </FormHelperText>
                            </FormControl>
                            <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                                <Input id="contactno" type="text" className={this.state.contactno} onChange={this.inputContactnoHandler} />
                                <FormHelperText className={this.state.contactnoRequired}>
                                    <span className="red">{this.state.contactnoError}</span>
                                </FormHelperText>
                            </FormControl>
                            <br /> <br />
                            <Button variant="contained" color="primary" onClick={this.signupClickHandler}>SIGNUP</Button>
                        </TabContainer>
                        }
                </Modal>
            </div>
        )
    }

}

export default Header;