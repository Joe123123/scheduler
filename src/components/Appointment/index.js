import "components/Appointment/styles.scss";
import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const onAdd = () => {
    transition(CREATE);
  };
  const onCancel = () => {
    back();
  };
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW && <Show {...props.interview} />}
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={onCancel} />
      )}
    </article>
  );
}
