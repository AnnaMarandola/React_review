import React, { Component } from "react";
import { connect } from 'react-redux';

class ReviewForm extends Component {

  render() {
    return <>form</>;
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(ReviewForm);
