import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import logo from "../img/tss-logo-sq.svg";

const svgWhiteStyle = {
  fill: "#fff",
  height: "1em",
  filter: "brightness(0%) saturate(100%) invert(100%)",
};

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <div className="content p-5">
      <h1>NOT FOUND</h1>
      <p>Contact us if you reached here in error</p>
      <button className="button is-large is-primary is-centered py-3"
        role="link" 
        onClick={()=>{navigate("/contact")}} >
        <span>Contact us &nbsp;</span>
        <span>
          <img src={logo} style={svgWhiteStyle} alt="TheScienceSeed" />
        </span>
      </button>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
