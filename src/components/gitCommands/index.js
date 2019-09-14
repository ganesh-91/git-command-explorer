import React, { Component } from 'react';
import "./index.scss";
import exportsJson from "../helper";

class GitCommands extends Component {
  render() {
    console.log('exportsJson.l1Json', exportsJson.l1Json);
    console.log('exportsJson.l12Json', exportsJson.l2Json);
    console.log('exportsJson.l3Json', exportsJson.l3Json);
    return (
      <div className="row">
        <div className="col-4 ">
          <h1 className="">Commands Explorer :- </h1>
          Select the correct action you wish to
          perform from the drop down below and
          we will tell how to do it.
          <div className="pl-5 pr-5 mt-5">
            <p className="text-pr-1 font-weight-bold">I want to :</p>
            <div className="form-group">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-8 ">
          <h1 className="">Usage :- </h1>
        </div>
      </div>
    );
  }
}

export default GitCommands;
