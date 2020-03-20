import { useEffect, useReducer } from "react";
import {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "../store/actionTypes";
import reducer from "../store/reducer";
import axios from "axios";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, day });

  function bookInterview(id, interview) {
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => dispatch({ type: SET_INTERVIEW, id, interview }));
  }

  function cancelInterview(id) {
    return axios
      .delete(`/api/appointments/${id}`, { interview: null })
      .then(() => dispatch({ type: SET_INTERVIEW, id, interview: null }));
  }

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    ws.onopen = function(event) {
      ws.onmessage = function(event) {
        const { type, id, interview } = JSON.parse(event.data);
        if (type === SET_INTERVIEW) {
          dispatch({ type, id, interview });
        }
      };
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then(responses => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: responses[0].data,
          appointments: responses[1].data,
          interviewers: responses[2].data
        });
      })
      .catch(err => console.log(err));
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}
