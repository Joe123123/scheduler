import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  const { value, interviewers, onChange } = props;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(({ id, name, avatar }) => (
          <InterviewerListItem
            key={id}
            name={name}
            avatar={avatar}
            selected={id === value}
            setInterviewer={e => onChange(id)}
          />
        ))}
      </ul>
    </section>
  );
}
