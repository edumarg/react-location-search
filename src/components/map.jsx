import React from "react";

const Map = (props) => {
  const { ipInfo } = props;
  let place = "";
  if (!ipInfo.city) {
    place = `${ipInfo.country_name}`;
  } else {
    place = `${ipInfo.city}+${ipInfo.country_code}`;
  }

  const url = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=${place}`;
  return (
    <React.Fragment>
      <div className="center">
        {ipInfo && (
          <iframe
            width="600"
            height="450"
            loading="lazy"
            title="map"
            src={url}
          ></iframe>
        )}
      </div>
    </React.Fragment>
  );
};

export default Map;
