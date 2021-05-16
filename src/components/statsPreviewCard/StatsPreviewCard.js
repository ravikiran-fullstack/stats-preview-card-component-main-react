import React from "react";

import "./styles.css";

const StatsPreviewCard = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="heading">
            <h1>
              Get <span className="heading-insight">insights</span> that help{" "}
              <br />
              your business grow
            </h1>
          </div>
          <div className="info">
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revunue, customer experience and overall efficiency
            </p>
          </div>
          <div className="row company-stats">
            <div className="col-md-4 col-sm-12">
              <h1>10k+</h1>
              <p>companies</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h1>314</h1>
              <p>templates</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h1>12M+</h1>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div className="right background-tint"></div>
      </div>
    </>
  );
};

export default StatsPreviewCard;
