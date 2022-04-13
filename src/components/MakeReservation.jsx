import ReservationTime from "./ReservationTime";

export default function MakeReservation() {
  console.log("MakeReservation");
  return (
    <div>
      <p>예약하기</p>
      <ReservationTime></ReservationTime>
    </div>
  );
}
