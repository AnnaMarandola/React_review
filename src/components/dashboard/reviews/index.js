import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import DashLayout from "../../../utils/dash_layout";
import { getReviews, loadMoreReviews } from "../../../store/actions";


const ReviewsMain = (props) => {
  const reviews = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!reviews.adminReviews){
      dispatch(getReviews(2))
    }
  }, [dispatch])

  const loadMore = () => {
    dispatch(loadMoreReviews(1, reviews. adminReviews))
  }

  const renderReviews = () => (
    reviews.adminReviews ?
        reviews.adminReviews.posts.map((post, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{post.title}</td>
            <td>{post.heading}</td>
            <td>{post.ownerData.name}</td>
            <td>{post.public === 1 ? "Publié" : "Brouillon"}</td>
            <td>
            <div className="table-link-red">Supprimer</div>
            </td>
            <td>
              <Link className="table-link" to={`reviews/edit/${post.id}`}>Modifier</Link>
            </td>
          </tr>
        ))
      : null
  )
  return (
    <DashLayout auth={props.auth} title="Reviews main">
    <div>
    <Link className="btn btn-outline-primary btn-sm" to="reviews/add">Ajouter un nouveau post</Link>
    </div>
    <hr/>
      <div className="table-responsive-md">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Rubrique</th>
              <th scope="col">Auteur</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            { renderReviews() }
          </tbody>
        </table>
      </div>

      <div className="btn btn-primary" onClick={loadMore}>Plus</div>
    </DashLayout>
  );
};

export default ReviewsMain;
