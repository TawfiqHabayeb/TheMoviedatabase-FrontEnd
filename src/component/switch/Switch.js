import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { setTrending } from "../redux/Slice";
const Switch = () => {
  const dispatch = useDispatch();
  const today = useRef();
  const week = useRef();

  const setToday = () => {
    dispatch(setTrending("day"));
    today.current.style.backgroundColor = "#032541";
    week.current.style.backgroundColor = "white";
    today.current.style.color = "#1ed5a9";
    week.current.style.color = "black";
  };

  const setThisWeek = () => {
    dispatch(setTrending("week"));

    week.current.style.backgroundColor = "#032541";
    today.current.style.backgroundColor = "white";
    week.current.style.color = "#1ed5a9";
    today.current.style.color = "black";
  };
  useEffect(() => {
    setToday();
  }, []);

  return (
    <div className="swaip">
      <div onClick={setToday} ref={today} className="butswip">
        Today
      </div>
      <div onClick={setThisWeek} ref={week} className="butswip">
        This Week
      </div>
    </div>
  );
};

export default Switch;
