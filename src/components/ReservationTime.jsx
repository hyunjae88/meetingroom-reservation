import React, { useState } from "react";
import TimeRange from "react-time-range"; //https://github.com/peterjoseph/react-time-range

export default function ReservationTime() {
  const [startTime, setStartTime] = useState(new Date("2022-01-01 00:00:00"));
  const [endTime, setEndTime] = useState(new Date("2022-01-01 00:00:00"));
  const [intervalTime, setIntervalTime] = useState("");

  const onChange = (value) => {
    const intervalMsec = new Date(value.endTime) - new Date(value.startTime);
    let seconds = intervalMsec / 1000;
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    console.log("minutes : ", minutes);
    console.log("hours : ", hours);
    setIntervalTime(hours + "시간 " + minutes + "분");
  };

  const onStartTimeChange = (value) => {
    setStartTime(value.startTime);
  };

  const onEndTimeChange = (value) => {
    setEndTime(value.endTime);
  };

  const getTimeToDisplay = (value) => {
    const time = new Date(value);
    return time.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <TimeRange
        startMoment={startTime}
        endMoment={endTime}
        onChange={onChange}
        onStartTimeChange={onStartTimeChange}
        onEndTimeChange={onEndTimeChange}
        startLabel={"시작시간"}
        endLabel={"종료시간"}
      />
      {/* <p>start Time : {getTimeToDisplay(startTime)}</p>
      <p>end Time : {getTimeToDisplay(endTime)}</p> */}
      <p>예약 시간 : {intervalTime}</p>
    </div>
  );
}
