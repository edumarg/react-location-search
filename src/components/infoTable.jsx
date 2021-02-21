import React from "react";
const InfoTable = (props) => {
  const { ipInfo } = props;
  return (
    <React.Fragment>
      <div className="center">
        {ipInfo && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">IP</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ipInfo.ip}</td>
                <td>{ipInfo.city}</td>
                <td>
                  {ipInfo.country_name}{" "}
                  <img src={ipInfo.flag} alt="flag icon" />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </React.Fragment>
  );
};

export default InfoTable;
