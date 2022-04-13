import React, { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import "react-calendar/dist/Calendar.css";
import ReservationList from "./components/ReservationList";
import MakeReservation from "./components/MakeReservation";
import "./App.css";
import FakeServer from "./FakeServer";

function App() {
  const [value, onChange] = useState(new Date());

  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [list, setList] = useState([]);

  const selectDay = (clickedValue, event) => {
    setDate(clickedValue.getDate());
    setMonth(clickedValue.getMonth() + 1);
    setYear(clickedValue.getFullYear());
    // console.log(clickedValue);
    // console.log(event);
    // console.log(clickedValue.getFullYear());
    // console.log(clickedValue.getMonth());
    // console.log(clickedValue.getDate());
    const query = {
      year: clickedValue.getFullYear(),
      month: clickedValue.getMonth() + 1,
      date: clickedValue.getDate(),
    };
    // console.log(query);
    const fakeServer = new FakeServer();
    const list = fakeServer.listOfReservation(query);
    // console.log(list);
    setList(list);
    //서버에 예약 리스트 요청
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} onClickDay={selectDay} />
      <p>
        {year}년 {month}월 {date}일 예약 상황
      </p>
      <ReservationList list={list}></ReservationList>
      <MakeReservation></MakeReservation>
    </div>
  );
}

export default App;
