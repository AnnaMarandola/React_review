import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/login/index";
import Contact from "./components/login/index";
import Home from "./components/home/index"; 
import ToastComponent from "./utils/toasts";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='contact' component={Contact}/>
            <Route path='/' component={Home}/>
        </Switch>
        <Footer />
        <ToastComponent />
      </BrowserRouter>
    );
  }
}

export default Routes;
