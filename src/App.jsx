
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51ICHLMIvgVAFkmhLQm1cP3kgs9Dy8YUCrEuUjfXJPhCQ7w60SpcVgqXPKJiwQZ3qG25NZqGkwx0KoMKvuku6UddL00RqCcoG5Y");

//calling the stripe components
export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}