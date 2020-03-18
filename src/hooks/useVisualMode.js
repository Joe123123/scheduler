import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (mode, replace = false) => {
    setMode(mode);
    if (replace) {
      const arr = [...history];
      arr.splice(arr.length - 1, 1, mode);
      setHistory(arr);
    } else {
      setHistory([...history, mode]);
    }
  };
  const back = () => {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory([...history].slice(0, -1));
    }
  };
  return { mode, transition, back };
}
