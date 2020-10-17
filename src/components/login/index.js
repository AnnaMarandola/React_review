import React from "react";

const Login = props => {
  return (
    <>
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>

        <>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control mb-3"
            placeholder="Your name"
          />

          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-control mb-3"
            placeholder="Your lastname"
          />
        </>

        <input
          type="email"
          id="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email address"
        />

        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />

        <br />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled="false"
        >
          Register or Login
        </button>

        <div className="mt-3">
          'Need to sign in':'Not registered' click
          <span className="login_type_btn"> here </span>
          to register/login.
        </div>
      </form>
    </>
  );
};

export default Login;
