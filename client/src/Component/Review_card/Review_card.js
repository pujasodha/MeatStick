import React, { Component } from "react";
import "./Review_card.css";
import axios from "axios";

class Review_card extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    axios.get(`/review_card`).then(res => {
      const reviews = res.data.map(obj => obj);
      this.setState({ reviews });
    });
  }

  render() {
    return (
      <div className="Review_card">
        {this.state.reviews.map(review => (
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Reviews</span>
                  <p id="card" key={review._id}>
                    {review.name}
                    <br />
                    {review.review}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Review_card;
