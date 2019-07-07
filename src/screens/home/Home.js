import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header/Header';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant_picture: '',
            restaurant_name: '',
            restaurant_categories: '',
            access_token: sessionStorage.getItem('access-token'),
            allRestaurants: null,
            filteredRestaurants: null
        };

    }

    /**
     * @description On component load - Get all restaurants
     */

    /*componentWillMount() {

        // Get user profile
        let dataUserProfile = null;
        let xhrUserProfile = new XMLHttpRequest();
        let that = this;
        xhrUserProfile.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                const data = JSON.parse(this.responseText).data;
                that.setState({
                    restaurant_picture: data.restaurant_picture,
                    restaurant_name: data.restaurant_name,
                    restaurant_categories: data.restaurant_categories
                });
            }
        });
        xhrUserProfile.open("GET", this.props.baseUrl + "/api/restaurant/?access_token=" + this.state.access_token);
        //xhrUserProfile.setRequestHeader("Cache-Control", "no-cache");
        xhrUserProfile.send(dataUserProfile);

    }*/

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }

}

export default Home;