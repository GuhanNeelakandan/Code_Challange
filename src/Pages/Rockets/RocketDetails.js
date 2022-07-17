import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Payloads from "./Payloads";

function RocketDetails() {
  let params = useParams();
  const { data } = useFetch(
    `https://api.spacexdata.com/v3/rockets/${params.id}`
  );
  console.log(data);
  return (
    <>
      <div className="container">
        <Link to={"/rocket"}>
          <button className="btn btn-secondary mt-5 rounded-circle">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="row mt-5 mb-5">
          <h1>
            {data.rocket_name} <i class="fa fa-rocket" aria-hidden="true"></i>
          </h1>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <p className="yr-style"> First Flight: {data.first_flight}</p>
            <p className="yr-style">
              {" "}
              Country: <strong>{data.country}</strong>
            </p>
            <p className="yr-style">
              {" "}
              company: <strong>{data.company}</strong>
            </p>
            <br></br>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <p>Active : {data.active ? "True" : "False"} </p>
            <p>Stages : {data.stages} </p>
            <p>Boosters : {data.boosters} </p>
            <p>cost_per_launch : {data.cost_per_launch} </p>
            <p>success_rate_pct : {data.success_rate_pct} </p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <span className="font-italic">Rocket Details</span>
            <p>
              Rocket Name :
              <span className="font-weight-bold">{data.rocket_name}</span>
              <br></br>
              Rocket Type :
              <span className="font-weight-bold">{data.rocket_type}</span>
            </p>
          </div>
        </div>
        <div className="row stage-style mb-5">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>Rocket Details</h3>
            <h5>Height</h5>
            <div>
              <p> meters: {data.height?.meters}</p>
              <p> Feet: {data.height?.feet}</p>
            </div>
            <h5>Diameter</h5>
            <div>
              <p> meters: {data.diameter?.meters}</p>
              <p> Feet: {data.diameter?.feet}</p>
            </div>
            <h5>Mass</h5>
            <div>
              <p> kg: {data.mass?.kg}</p>
              <p> lb: {data.mass?.lb}</p>
            </div>
            <h5>PayLoad weights</h5>
            {data.payload_weights?.map((e) => {
              return <Payloads element={e} />;
            })}
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>First Stage</h3>
            <p> Engines : {data.first_stage?.engines}</p>
            <p> Fuel in tons : {data.first_stage?.fuel_amount_tons}</p>
            <p> Buring time in sec : {data.first_stage?.burn_time_sec}</p>
            <p>
              {" "}
              Thrust sea Level : <br></br> kN:
              {data.first_stage?.thrust_sea_level?.kN}
              <br></br>
              lbf:{data.first_stage?.thrust_sea_level?.lbf}
            </p>
            <p>
              Thrust vacuum : <br></br>kN:{data.first_stage?.thrust_vacuum?.kN}
              <br></br>lbf:{data.first_stage?.thrust_vacuum?.lbf}
            </p>
            <div>
              <h3>Second Stage</h3>
              <p> Engines : {data.second_stage?.engines}</p>
              <p> Fuel in tons: {data.second_stage?.fuel_amount_tons}</p>
              <p> burn_time_sec: {data.second_stage?.burn_time_sec}</p>
              <p>
                Thrust: <br></br>kN : {data.second_stage?.thrust?.kN}
                <br></br>lbf: {data.second_stage?.thrust?.lbf}
              </p>
            </div>
            <div>
              <h3>PayLoad</h3>
              <p>Option:1 {data.second_stage?.payloads?.option_1}</p>
              <p>Option:2 {data.second_stage?.payloads?.option_2}</p>
              <h4>Composite fairing</h4>
              <p>
                height<br></br>
                meter:
                {data.second_stage?.payloads?.composite_fairing?.height?.meters}
                ,<br></br>
                feet:{" "}
                {data.second_stage?.payloads?.composite_fairing?.height?.feet}
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>Engines</h3>
            <p>Engine : {data.engines?.number}</p>
            <p>Type : {data.engines?.type}</p>
            <p>version : {data.engines?.version}</p>
            <p>layout : {data.engines?.layout}</p>
            <p>engine_loss_max : {data.engines?.engine_loss_max}</p>
            <p>propellant_1 : {data.engines?.propellant_1}</p>
            <p>propellant_2 : {data.engines?.propellant_2}</p>
            <div>
              <h4>Thrust</h4>
              <p>
                Thrust Sea Level<br></br>
                kN: {data.engines?.thrust_sea_level.kN}
                <br></br>
                lbf: {data.engines?.thrust_sea_level.lbf}
              </p>
              <p>
                Thrust Vacuum<br></br>
                kN: {data.engines?.thrust_vacuum.kN}
                <br></br>
                lbf: {data.engines?.thrust_vacuum.lbf}
              </p>
              <p>
                Thrust Weight<br></br>
                thrust_to_weight: {data.engines?.thrust_to_weight}
              </p>
            </div>
            <div>
              <h3>Landing legs</h3>
              <p>Numbers : {data.landing_legs?.number}</p>
              <br></br>
              <p>Materials : {data.landing_legs?.material}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border mb-3">
            <h3>Links</h3>
            <p>
              <a href={data.wikipedia} target="_blank">
                Wikipedia
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RocketDetails;
