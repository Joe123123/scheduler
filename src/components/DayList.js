import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  return (
    <ul>
      {days.map(({ id, name, spots }) => (
        <DayListItem
          key={id}
          name={name}
          spots={spots}
          selected={name === day}
          setDay={e => setDay(name)}
        />
      ))}
    </ul>
  );
}
