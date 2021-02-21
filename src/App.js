import React, { Component } from "react";

import Input from "./components/input";

class App extends Component {
  state = {
    ipAddress: "",
    ipInfo: {},
  };

  handleNewIPAddress(myIpAddress) {
    console.log(myIpAddress);
    this.setState({ ipAddress: myIpAddress });
  }

  render() {
    return (
      <React.Fragment>
        <Input
          onNewIPAddress={(myIpAddress) => this.handleNewIPAddress(myIpAddress)}
        />
      </React.Fragment>
    );
  }
}

export default App;
