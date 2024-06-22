import { useState } from "react";
import "../css/BoxCard.css"

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <div className="hide-button">
          <button onClick={() => setShow(!show)} className="hide">
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
};
