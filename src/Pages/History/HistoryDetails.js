import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import wings from "../../images/wings.png";
import { Link } from "react-router-dom";

function HistoryDetails() {
  let params = useParams();
  const { data } = useFetch(
    `https://api.spacexdata.com/v3/history/${params.id}`
  );

  return (
    <>
      <div className="container">
        <Link to={"/history"}>
          <button className="btn btn-secondary mt-5 rounded-circle">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="row mt-5">
          <div className="col-8">
            <h1>{data.title}</h1>
            <div className="fs-4 mt-5">
              <p>
                Flight Number<br></br>
                <i class="fa fa-fighter-jet" aria-hidden="true"></i>{" "}
                {data.flight_number}
              </p>
              <p>{data.details}</p>
            </div>
            <div>
              Links to refer
              <ul className="list-style mt-2">
                <li>
                  {data.links?.reddit !== null ? (
                    <a href={data.links?.reddit} target="_blank">
                      Reddit
                    </a>
                  ) : (
                    "No links"
                  )}
                </li>
                <li>
                  {data.links?.article !== null ? (
                    <a href={data.links?.article} target="_blank">
                      Article
                    </a>
                  ) : (
                    "No links"
                  )}
                </li>
                <li>
                  {data.links?.wikipedia !== null ? (
                    <a href={data.links?.wikipedia} target="_blank">
                      Wikipedia
                    </a>
                  ) : (
                    "No links"
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <img src={wings} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryDetails;
