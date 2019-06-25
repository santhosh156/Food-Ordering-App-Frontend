import React, { Component } from 'react';
import './Header.css';
import Fastfood from '@material-ui/icons/Fastfood';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

class Header extends Component {

    render() {  
        return(
            <div>
                <header className="app-header flex-container">
                    <div className="app-logo"> 
                        <Fastfood style={{fontSize: "35px"}}/>
                    </div>
                    <div className="searchbox">
                        <Search />
                        <Input style={{color: "grey"}} type="text" placeholder="Search by Restaurant Name" />
                    </div>
                    <div className="login">
                        <Button variant = "contained" color = "default" className="login-btn">
                            <AccountCircle className="account-circle"/>LOGIN
                        </Button>
                    </div>
                </header>
            </div>
        )
    }

}

export default Header;