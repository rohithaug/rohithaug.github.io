import React, { Component } from "react";
import "../styling/others.css";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col" align="center">
                <div className="text">
                  Oops! The requested page was not found <br />
                </div>
                <div className="emoji">&#x2639;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
