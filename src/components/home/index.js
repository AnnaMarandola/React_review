import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../store/actions";
import moment from "moment";
import CarouselWidget from "../../utils/carousel";
import Masonry from "react-masonry-css";
import { Container, Card } from "react-bootstrap";

class Home extends Component {
  componentDidMount() {
    // 'heading', '===', 'react'
    this.props.dispatch(fetchPosts(6, null));
  }
  renderFeaturesPosts = () =>
    this.props.reviews.posts
      ? this.props.reviews.posts.map((item, i) => (
          <Card key={i}>
            <Card.Header>{item.heading}</Card.Header>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.excerpt}</Card.Text>
              <Card.Text>Posté le { moment.unix(item.createdAt.seconds).format("DD/MM/YYYY")}</Card.Text>
              <Link to={`/reviews/${item.id}`}>Lire plus</Link>
            </Card.Body>
          </Card>
        ))
      : null;

  render() {
    return (
      <>
        <CarouselWidget />
        <Container>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.renderFeaturesPosts()}
          </Masonry>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Home);
