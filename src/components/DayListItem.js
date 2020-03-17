import React from "react";
import "components/DayListItem.scss";
const classNames = require("classnames");

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;
  const itemClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });
  const formatSpots = spots => {
    let str;
    if (spots === 0) {
      str = "no spots remaining";
    } else if (spots === 1) {
      str = "1 spot remaining";
    } else {
      str = spots + " spots remaining";
    }
    return str;
  };

  const text = formatSpots(spots);
  return (
    <li className={itemClass} onClick={setDay}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{text}</h3>
    </li>
  );
}
