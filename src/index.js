import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain="dev-nzpxzbm5i2dwiahf.us.auth0.com"
  //   clientId="YW7hJ8LzmjXwv8fQtsALm26Vg4jnUpzm"
  //   redirectUri={window.location.origin}
  // >
    <App />
  // {/* </Auth0Provider> */}
);

// login
// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-nzpxzbm5i2dwiahf.us.auth0.com"
//     clientId="YW7hJ8LzmjXwv8fQtsALm26Vg4jnUpzm"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );
