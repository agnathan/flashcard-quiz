import React from "react";

const SignUpForm = ({ handleSubmit, text }) => (
  <div className="SignUpForm">
    <form onSubmit={handleSubmit}>
      <input ref="name" placeholder="Name" value={text} />
      <input type="submit" />
    </form>
  </div>
);

export default SignUpForm;
