import React from "react";

const Waitting = () => {
  return (
    <div className="Waitting">
      <div className="container">
        <div className="Ring"></div>
        <div className="Ring"></div>
        <div className="Ring"></div>
        <div className="Text">
          <p>Loading</p>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};
export default Waitting;
