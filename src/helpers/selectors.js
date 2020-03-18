export function getAppointmentsForDay(state, day) {
  const arr = [];
  const { days, appointments } = state;
  for (let el of days) {
    if (el.name === day) {
      for (let appointmentId of el.appointments) {
        arr.push(appointments[appointmentId]);
      }
    }
  }
  return arr;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewerId = interview.interviewer;
    const res = {
      ...interview,
      interviewer: state.interviewers[interviewerId]
    };
    return res;
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const arr = [];
  const { days, interviewers } = state;
  for (let el of days) {
    if (el.name === day) {
      for (let interviewerId of el.interviewers) {
        arr.push(interviewers[interviewerId]);
      }
    }
  }
  return arr;
}
