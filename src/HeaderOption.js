import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar,Icon, title }) {
  return (
    <div>
      <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        <h5 className='headerOption__title'>{title}</h5>
      </div>
    </div>
  );
}

export default HeaderOption;
