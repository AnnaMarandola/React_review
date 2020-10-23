import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ToastComponent from "./utils/toasts";
import { connect } from "react-redux";
import { autoSignIn, logoutUser } from "./store/actions";
import AuthHoc from "./components/hoc/authHoc.js";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/login/index";
import Contact from "./components/contact/index";
import Home from "./components/home/index";
import Dashboard from "./components/dashboard/index.js";
import Reviews from "./components/dashboard/reviews/index";
import Profile from "./components/dashboard/profile";
import ReviewAddEdit from "./components/dashboard/reviews/add_edit";
import Review from "./components/reviews/index";
import Messages from "./components/dashboard/messages";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(autoSignIn());
  }

  handleLogout = () => this.props.dispatch(logoutUser());

  app = (auth) => (
    <>
      <BrowserRouter>
        <Header auth={auth} logout={this.handleLogout} />
        <Switch>
          <Route
            path="/dashboard/reviews/edit/:id"
            component={AuthHoc(ReviewAddEdit, true)}
          />
          <Route
            path="/dashboard/reviews/add"
            component={AuthHoc(ReviewAddEdit, true)}
          />
          <Route path="/dashboard/reviews" component={AuthHoc(Reviews, true)} />
          <Route path="/dashboard/profile" component={AuthHoc(Profile)} />
          <Route
            path="/dashboard/messages"
            component={AuthHoc(Messages, true)}
          />
          <Route path="/dashboard" component={AuthHoc(Dashboard)} />
          <Route path="/reviews/:id" component={Review} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
        <ToastComponent />
      </BrowserRouter>
    </>
  );

  render() {
    const { auth } = this.props;
    return auth.checkingAuth ? this.app(auth) : "...loading";
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Routes);
