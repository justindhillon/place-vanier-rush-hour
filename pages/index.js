import { useState } from "react";
import LineChart from "../components/line-chart";

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export default function Homepage() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  fetch('https://placevanierline.vercel.app/api/get-data', { method: 'POST' })
    .then(response => response.json())
    .then(response => console.log(response.pets.rows)); 

  return (
    <div>
      <Button />
      <LineChart data={userData} />
    </div>
  );
}

function Button() {
  function handleClick() {
    fetch("https://placevanierline.vercel.app/api/add");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}
