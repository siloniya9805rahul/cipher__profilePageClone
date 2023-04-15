import React from "react";
import "./WebLinks.css";

function WebLInks() {
  return (
    <div>
      <h2>On The Web</h2>

      <div className="louter-container">
        <div className="lcontainer">
          <h2 className="linkname">GitHub</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>
        <div className="lcontainer">
          <h2 className="linkname">Linked</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>

        <div className="lcontainer">
          <h2 className="linkname">Email</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>
        <div className="lcontainer">
          <h2 className="linkname">Facebook</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>

        <div className="lcontainer">
          <h2 className="linkname">Email</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>
        <div className="lcontainer">
          <h2 className="linkname">Facebook</h2>
          <input type="text" className="inputlink" placeholder="Enter" />
        </div>
      </div>
    </div>
  );
}

export default WebLInks;
