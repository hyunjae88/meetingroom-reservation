const reservationListDB = [
  {
    day: { year: 2022, month: 4, date: 1 },
    list: [
      {
        name: "임현재",
        subject: "회의1",
      },
      {
        name: "한지혜",
        subject: "회의2",
      },
    ],
  },
  {
    day: { year: 2022, month: 4, date: 2 },
    list: [
      {
        name: "임현재",
        subject: "회의3",
      },
      {
        name: "김유신",
        subject: "회의4",
      },
    ],
  },
  {
    day: { year: 2022, month: 4, date: 3 },
    list: [
      {
        name: "홍길동",
        subject: "회의5",
      },
      {
        name: "브래드피트",
        subject: "회의6",
      },
    ],
  },
];

class FakeServer {
  constructor() {
    const hero1 = {
      name: "Batman",
    };
    const hero2 = {
      name: "Batman",
    };
  }

  listOfReservation(query) {
    let result;
    reservationListDB.map((data) => {
      if (JSON.stringify(data.day) === JSON.stringify(query)) {
        console.log("same");
        result = data.list;
      } else {
        // console.log("There is no same");
      }
      return 0;
    });
    // console.log(result);
    return result;
  }
}

export default FakeServer;
