import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader
        className="cliploader"
        color={"#000"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
