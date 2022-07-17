import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import launch from "../../images/launch1.png";

function LaunchDetails() {
  let params = useParams();
  let firstStage = [];
  console.log(firstStage);
  const { data } = useFetch(
    `https://api.spacexdata.com/v3/launches/${params.id}`
  );
  return (
    <>
      <div className="container">
        <Link to={"/launch"}>
          <button className="btn btn-secondary mt-5 rounded-circle">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="row mt-5 mb-5">
          <h1>
            {data.mission_name} <i class="fa fa-rocket" aria-hidden="true"></i>
          </h1>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <p className="yr-style"> Launch year : {data.launch_year}</p>
            <p className="yr-style"> Launch date : {data.launch_date_utc}</p>
            <br></br>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <p>
              Flight Number :
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>{" "}
              {data.flight_number}
            </p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <span className="font-italic">Rocket Details</span>
            <p>
              Rocket Name :
              <span className="font-weight-bold">
                {data.rocket?.rocket_name}
              </span>
              <br></br>
              Rocket Type :
              <span className="font-weight-bold">
                {data.rocket?.rocket_type}
              </span>
            </p>
          </div>
        </div>
        <div className="row stage-style mb-5">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>First Stage</h3>
            <h5>cores</h5>
            <div>
              <p> Flight no: {data.rocket?.first_stage?.cores[0].flight}</p>
              <p> Core no: {data.rocket?.first_stage?.cores[0].core_serial}</p>
              <p>
                {" "}
                Block:{" "}
                {data.rocket?.first_stage?.cores[0].block === true
                  ? "True"
                  : "False"}
              </p>
              <p>
                {" "}
                Gridfins:{" "}
                {data.rocket?.first_stage?.cores[0].gridfins === true
                  ? "True"
                  : "False"}
              </p>

              <p>
                {" "}
                legs:{" "}
                {data.rocket?.first_stage?.cores[0].legs === true
                  ? "True"
                  : "False"}
              </p>
              <p>
                {" "}
                reused:{" "}
                {data.rocket?.first_stage?.cores[0].reused === true
                  ? "True"
                  : "False"}
              </p>
              <p>
                {" "}
                land_success:{" "}
                {data.rocket?.first_stage?.cores[0].land_success === true
                  ? "True"
                  : "False"}
              </p>
              <p>
                landing_intent:
                {data.rocket?.first_stage?.cores[0].landing_intent === true
                  ? "True"
                  : "False"}
              </p>
              <p>
                landing_type: {data.rocket?.first_stage?.cores[0].landing_type}
              </p>
              <p>
                landing_vehicle:
                {data.rocket?.first_stage?.cores[0].landing_vehicle}
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>Second Stage</h3>
            <span> Block :{data.rocket?.second_stage?.block}</span>
            <h5>
              Payload : {data.rocket?.second_stage?.payloads[0].payload_id}
            </h5>
            <p>Id :{data.rocket?.second_stage?.payloads[0].norad_id[0]}</p>
            <p>
              reused :
              {data.rocket?.second_stage?.payloads[0].reused === true
                ? "True"
                : "False"}
            </p>
            <p>
              customers :{data.rocket?.second_stage?.payloads[0].customers[0]}
            </p>
            <p>
              nationality :{data.rocket?.second_stage?.payloads[0].nationality}
            </p>
            <p>
              manufacturer :
              {data.rocket?.second_stage?.payloads[0].manufacturer}
            </p>
            <p>
              payload_type :
              {data.rocket?.second_stage?.payloads[0].payload_type}
            </p>
            <p>
              payload_mass_kg :
              {data.rocket?.second_stage?.payloads[0].payload_mass_kg}
            </p>
            <p>
              payload_mass_lbs :
              {data.rocket?.second_stage?.payloads[0].payload_mass_lbs}
            </p>
            <p>orbit :{data.rocket?.second_stage?.payloads[0].orbit}</p>
            {Object.keys(
              data.rocket?.second_stage?.payloads[0].orbit_params || {}
            ).map(function (key) {
              return (
                <p>
                  {key} :{" "}
                  {data.rocket?.second_stage?.payloads[0].orbit_params[key]}
                </p>
              );
            })}
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>Firings</h3>
            <span>
              {" "}
              Reused :
              {data.rocket?.fairings?.reused === true ? "True" : "False"}
            </span>
            <p>
              recovery_attempt :
              {data.rocket?.fairings?.recovery_attempt === true
                ? "True"
                : "False"}
            </p>
            <p>
              recovered :
              {data.rocket?.fairings?.recovered === true ? "True" : "False"}
            </p>
            <p>ship :{data.rocket?.fairings?.ship === null && "Null"}</p>
            <div>
              <p>Ships: {data?.ships}</p>
            </div>
            <div>
              <a href={data?.telemetry?.flight_club} target="_blank">
                Telementry
              </a>
            </div>
            <div>
              {Object.keys(data?.launch_site || {}).map(function (key) {
                return (
                  <p>
                    {key} : {data?.launch_site[key]}
                  </p>
                );
              })}
              {/* <p>Launch sites Id : {data?.launch_site?.site_id} </p>
              <p>Launch site_name : {data?.launch_site?.site_name} </p>
              <p>
                Launch site_name_long : {data?.launch_site?.site_name_long}{" "}
              </p> */}
            </div>
            <div>
              <p>
                Launch Success :{" "}
                {data?.launch_success === true ? "True" : "False"}{" "}
              </p>
            </div>
            <div className="mt-1">
              <h6>Links</h6>
              {Object.keys(data?.links || {}).map(function (key) {
                return (
                  <a href={data?.links[key]} target="_blank">
                    {key}
                    <br></br>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>TimeLine</h3>
            {Object.keys(data?.timeline || {}).map(function (key) {
              return (
                <div>
                  <p>
                    {key} : {data?.timeline[key]}
                  </p>
                  {console.log(key, data?.timeline[key])}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="row mt-5">
            <h4>Images</h4>
            {data?.links?.flickr_images?.map((e) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 m-1">
                  <img src={e} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LaunchDetails;
