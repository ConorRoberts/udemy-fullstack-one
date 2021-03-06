import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

const Payments = ({ amount, handleToken }) => {
  return (
    <StripeCheckout
      amount={100}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="Fuck me raw"
      description="Buying liberian cocaine"
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(null, { handleToken })(Payments);
