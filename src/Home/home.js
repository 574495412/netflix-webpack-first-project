import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="con">
        <div className="fadediv">
          <div className="pagecontent">
            <div className="container main">
              <div className="row text-center">
                <h1 className="fs-1">Unlimited movies, TV shows, and more.</h1>
              </div>
              <div className="row text-center ">
                <h3 className="fs-4">Watch anywhere. Cancel anytime.</h3>
              </div>
              <div className="row text-center">
                <h4 className="fs-6 mt-3">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h4>
              </div>
              <div className="row mt-3 text-center">
                <div className="col-8 clos">
                  <input
                    type="email"
                    htmlFor="email"
                    className="inputhome"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-4 clos">
                  <button className="input-element regbtn" type="submit">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
