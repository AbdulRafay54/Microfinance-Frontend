import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ handleFunct, routLink, additinalClasses, BtnText }) => {
  return (
    <Link to={routLink}>
      <div onClick={handleFunct} className={`${additinalClasses} py-2 px-5 rounded text-white`}>
        {BtnText}
      </div>
    </Link>
  );
};

export default PrimaryBtn;
