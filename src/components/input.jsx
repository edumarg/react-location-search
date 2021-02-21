import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "",
    };
  }

  handleChange(event) {
    let myIPAddress = event.target.value;
    this.setState({ ipAddress: myIPAddress });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onNewIPAddress(this.state.ipAddress);
    event.target.reset();
    this.setState({ ipAddress: "" });
  }

  render() {
    return (
      <div className="my-input">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="ipInput" className="form-label">
            IP address
          </label>
          <input
            class="form-control"
            autoFocus
            id="ipInput"
            name="ipInput"
            type="text"
            placeholder="Type IP address to search"
            onChange={(event) => this.handleChange(event)}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
