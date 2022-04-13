export default function ReservationList(props) {
  console.log("Props1 :", props);

  if (props.list === undefined) return <div>예약없음</div>;
  else {
    return (
      <div>
        <ol>
          {props.list.map((item) => {
            console.log(item);
            const li = (
              <li>
                이름 : {item.name} 목적 : {item.subject}
              </li>
            );
            return li;
          })}
        </ol>
      </div>
    );
  }
}
