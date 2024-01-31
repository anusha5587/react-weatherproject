import React from "react";

const CurrentLocationButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{ border: "none", float: "right" }}
    >
      Current Location
    </button>
  );
};

export default CurrentLocationButton;
