import React, { Component } from "react";
import './Review_card.css';
import axios from 'axios'


class Review_card extends Component {
  constructor(){
      super();
      this.state = { 
        reviews:[]
         }
  }

  componentDidMount() {
    axios.get(`/review_card`)
      .then(res => {
        
        const reviews = res.data.map(obj => obj);
        this.setState({ reviews })
        
      });
  }
    
    
    render() {
        return(
            <div className="Review_card">
               {this.state.reviews.map(review =>(
                   <p key={review._id} >{review.name}<br/>{review.review}</p>
               ))} 
            </div>
        )
    }
}

export default Review_card