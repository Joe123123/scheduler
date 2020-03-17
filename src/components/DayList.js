import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  return (
    <ul>
      {days.map(el => (
        <DayListItem
          key={el.id}
          name={el.name}
          spots={el.spots}
          selected={el.name === day}
          setDay={setDay}
        />
      ))}
    </ul>
  );
}
