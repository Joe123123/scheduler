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
