import React from "react";

import "./styles.css";

const StatsPreviewCard = () => {
  return (
    <>
      <div className="container mt-5 border">
        <div className="row">
          <div className="col-md-6 col-sm-12 order-sm-12 card-image background-tint">
            
          </div>
          <div className="col-md-6 col-sm-12 order-sm-1">
              
              <div className="heading">
              <h1>
                Get <span className="heading-insight">insights</span> that help{" "}
                <br />
                your business grow
              </h1>
            </div>
            <div className="info">
              <p>
                Discover the benefits of data analytics and make better
                decisions regarding revunue, customer experience and overall
                efficiency
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
        </div>
      </div>
      {/* <div className="row center card-container">
        <div className="col-2 card-body">
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
            <div className="col-1">
              <h1>10k+</h1>
              <p>companies</p>
            </div>
            <div className="col-1">
              <h1>314</h1>
              <p>templates</p>
            </div>
            <div className="col-1">
              <h1>12M+</h1>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div className="col-2 card-image background-tint"></div>
      </div> */}
    </>
  );
};

export default StatsPreviewCard;
