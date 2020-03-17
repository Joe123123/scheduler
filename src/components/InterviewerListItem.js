import React from "react";
import "components/InterviewerListItem.scss";
const classNames = require("classnames");

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;
  const liClass = classNames({
    interviewers__item: true,
    "interviewers__item--selected": selected
  });
  return (
    <li className={liClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
