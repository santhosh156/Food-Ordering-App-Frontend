import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
    media: {
      height: 140
    },
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: null
        }
    }

    componentWillMount() {

        // Get user profile
        let dataUserProfile = null;
        let xhrUserProfile = new XMLHttpRequest();
        let that = this;
        xhrUserProfile.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const data = JSON.parse(this.responseText).restaurants;
            // console.log('restaurants::',data);
            that.setState({
                restaurants : data
            }); 
        }
        });
        xhrUserProfile.open("GET",  this.props.baseUrl +  "restaurant");
        xhrUserProfile.setRequestHeader("Cache-Control", "no-cache");
        xhrUserProfile.send(dataUserProfile);
    }

    restaurantClickHandler = (restaurant_id, e) => {        
        this.props.history.push("/restaurant/"+restaurant_id);       
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <Container fixed style={{ 'margin':16}}>
                    <Grid container spacing={3}>
                        {(this.state.restaurants || []).map((restaurant, index) => (
                            <Grid item xs={6} sm={3} key={restaurant.id}>
                            <Card  onClick={this.restaurantClickHandler.bind(this,restaurant.id)} >
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={restaurant.photo_URL}
                                    title={restaurant.restaurant_name}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{minHeight:70}}>
                                            {restaurant.restaurant_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:8}}>
                                        {restaurant.categories}
                                    </Typography>
                                    <div className="card-footer">
                                        <div className="card-footer-rating">
                                             <FontAwesomeIcon icon={faStar} /><span style={{marginLeft:4}}>{restaurant.customer_rating}({restaurant.number_customers_rated})</span> 
                                        </div>
                                        <div> 
                                            <FontAwesomeIcon icon={faRupeeSign}/>{restaurant.average_price} for two
                                        </div>
                                    </div>
                                    
                                    </CardContent>
                                </CardActionArea>                      
                            </Card>
                            </Grid>  
                        ))}
                    </Grid>                
                </Container>
            </div>
        )
    }

}

export default withStyles(styles)(Home);