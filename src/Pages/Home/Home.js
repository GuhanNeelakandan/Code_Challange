import React from "react";
import "./Home.css";
import History from "../../images/History.png";
import Launch from "../../images/launch.png";
import Rocket from "../../images/Rocket.png";
import HomeCard from "./HomeCard";

function Home() {
  let content = [
    {
      name: "History",
      description: "See What Happend in our History",
      image: History,
      page: "history",
    },
    {
      name: "Launches",
      description: "Time and accurate of Launches",
      image: Launch,
      page: "launch",
    },
    {
      name: "Rockets",
      description: "Details of Rockets and types",
      image: Rocket,
      page: "rocket",
    },
  ];
  return (
    <>
      <div className="text-center mt-4 mb-5">
        <h1>Welcome</h1>
      </div>
      <div className="container-fluid home-style">
        <div className="row show-card">
          {content.map((list) => {
            return <HomeCard list={list} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
