import React from "react";

const SingleService = (props) => {
  let { title, icon, text } = props.serv;
  return (
    <div className="serv">
      <img src={icon} className="servIcon" />
      <h2 className="servTitle">{title}</h2>
      <p className="servText">{text}</p>
    </div>
  );
};

export default SingleService;
