import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RocketsCard from "./RocketsCard";

function Rockets() {
  const { data, loading, error, reFetch } = useFetch(
    "https://api.spacexdata.com/v3/rockets"
  );
  console.log(data);
  return (
    <>
      <div className="container-fluid">
        <Link to={"/"}>
          <button className="btn btn-secondary mx-4 mt-4 rounded-circle">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="text-center mt-4">
          <h1>Rockets</h1>
        </div>
        <div className="container-fluid">
          <div className="row ">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((list) => {
                  return <RocketsCard list={list} />;
                })}
              </>
            )}
          </div>
          {/* {error && error.message} */}
        </div>
      </div>
    </>
  );
}

export default Rockets;
