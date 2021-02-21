import React, { Component } from "react";

import Input from "./components/input";
import InfoTable from "./components/infoTable";

import http from "./services/httpServices";

class App extends Component {
  state = {
    ipAddress: "",
    ipInfo: "",
  };

  async getIPdata(ipAddress) {
    console.log("ip", ipAddress);
    console.log("key", process.env.REACT_APP_IPDATA_KEY);
    const response = await http.get(
      `https://api.ipdata.co/${ipAddress}?api-key=${process.env.REACT_APP_IPDATA_KEY}`
    );
    const myIpInfo = response.data;
    this.setState({ ipInfo: myIpInfo });
  }

  handleNewIPAddress(myIpAddress) {
    this.setState({ ipAddress: myIpAddress });
    this.getIPdata(myIpAddress);
  }

  render() {
    return (
      <React.Fragment>
        <Input
          onNewIPAddress={(myIpAddress) => this.handleNewIPAddress(myIpAddress)}
        />
        <InfoTable ipInfo={this.state.ipInfo} />
      </React.Fragment>
    );
  }
}

export default App;
