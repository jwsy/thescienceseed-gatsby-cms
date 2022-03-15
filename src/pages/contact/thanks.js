import React from "react";
import Layout from "../../components/Layout";

import logo from "../../img/logo-words-50.png";
// a = "/img/tss-logo-sq.svg";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="content has-text-centered">
            <h1>Thank you for contacting</h1>
            <img
              src={logo}
              alt="TheScienceSeed"
              // style={{ width: "14em", height: "10em" }}
              style={{ height: "5em" }}
            />
            <p>We'll get back to you as soon as possible!</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
