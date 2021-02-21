import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "",
      erroMsg: "",
    };
  }

  validate() {
    const ipRegExp = /((0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)\.){3}(0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)/;
    if (this.state.ipAddress === "")
      return "A valid IPv4 is require in the form xxx.xxx.xxx.xxx";
    if (this.state.ipAddress) {
      if (!ipRegExp.test(this.state.ipAddress))
        return "A valid IPv4 is require in the form xxx.xxx.xxx.xxx";
      else return null;
    }
  }

  handleChange(event) {
    let myIPAddress = event.target.value;
    this.setState({ ipAddress: myIPAddress.trim() });
  }

  handleSubmit(event) {
    event.preventDefault();
    const error = this.validate();
    if (error) {
      this.setState({ ipAddress: "", erroMsg: error });
      event.target.reset();
      return;
    }
    this.props.onNewIPAddress(this.state.ipAddress);
    event.target.reset();
    this.setState({ ipAddress: "", erroMsg: error });
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="ipInput" className="form-label">
            IP address
          </label>
          <input
            className="form-control"
            autoFocus
            id="ipInput"
            name="ipInput"
            type="text"
            placeholder="Type IP address to search"
            onChange={(event) => this.handleChange(event)}
          />
          {this.state.erroMsg && (
            <div className="alert alert-danger" role="alert">
              {this.state.erroMsg}
            </div>
          )}
          <button className="btn btn-primary mt-3" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
