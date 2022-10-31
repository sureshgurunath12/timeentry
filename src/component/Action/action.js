import React, { useState } from "react";

function Registration({ handler }) {
  const [isSignInOpen, setSignInOpen] = useState(false);
  return (
    <div className="model registration">
      <div className="model-container">
        <div className="model-container-data">
          <div className="model-header">
            Header Text
            <span className="model-close" onClick={handler}>
              X
            </span>
          </div>
          <div className="model-body">Body Content</div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
