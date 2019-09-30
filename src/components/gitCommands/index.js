import React, { Component } from 'react';
import "./index.scss";
import exportsJson from "../helper";

import utils from "../../utils";

class GitCommands extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      l1Value: "0",
      l2Value: "0",
      l3Value: "0",
      command: "",
      psScript: ""
    }
  }


  render() {
    return (
      <div className="row">
        <div className="col-4 ">
          <div>
            <h1 className="">Commands Explorer :- </h1>

          </div>
          <div>
            <p>Select the correct action you wish to
              perform from the drop down below and
              we will tell how to do it.
            </p>
          </div>
          <div className="pl-3 pr-3">
            <p className="text-pr-1 font-weight-bold">I want to :</p>
            <div className="form-group">
              <select value={this.state.l1Value} className="custom-select" id="l1Json" onChange={this.l1Changed}>
                <option value="0" disabled>Choose...</option>
                {exportsJson.l1Json.map((elm) => {
                  const label = elm.label.charAt(0).toUpperCase() + elm.label.slice(1);
                  return (<option key={utils.getUUID()} value={elm.value}>{label}</option>)
                })}
              </select>
            </div>
            <div className="form-group">
              <select value={this.state.l2Value} className="custom-select" id="l2Json" onChange={this.l2Changed}>
                <option value="0" disabled>Choose...</option>
                {this.state.l1Value === "0" || exportsJson.l2Json[this.state.l1Value].map((elm) => {
                  const label = elm.label.charAt(0).toUpperCase() + elm.label.slice(1);
                  return (<option key={utils.getUUID()} value={elm.value}>{label}</option>)
                })}
              </select>
            </div>
            {(exportsJson.l3Json[this.state.l2Value] && exportsJson.l3Json[this.state.l2Value].length > 0) && <div className="form-group">
              <select value={this.state.l3Value} className="custom-select" id="l3Json" onChange={this.l3Changed}>
                <option value="0" disabled>Choose...</option>
                {this.state.l2Value === "0" || exportsJson.l3Json[this.state.l2Value].map((elm) => {
                  const label = elm.label.charAt(0).toUpperCase() + elm.label.slice(1);
                  return (<option key={utils.getUUID()} value={elm.value}>{label}</option>)
                })}
              </select>
            </div>
            }
          </div>
        </div>
        <div className="col-8 ">
          <h1 className="">Usage :- </h1>
          <div>
            <div class="card">
              <div class="card-body">
                {this.state.command}
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                {this.state.psScript}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  l1Changed = (e) => {
    this.setState({
      l1Value: e.target.value,
      l2Value: "0",
      l3Value: "0"
    })
  }

  l2Changed = (e) => {
    this.setState({
      l2Value: e.target.value,
      l3Value: "0"
    })
  }

  l3Changed = (e) => {
    this.setState({
      l3Value: e.target.value
    })
  }

}

export default GitCommands;
