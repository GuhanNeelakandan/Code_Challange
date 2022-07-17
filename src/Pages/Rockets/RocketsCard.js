import React from "react";
import { Link } from "react-router-dom";

function RocketsCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-5">
      <div class="card style-card">
        <div class="card-body">
          <h5 class="card-title">{props.list.rocket_name}</h5>
          <p class="card-text details-style">{props.list.description}</p>
          <p className="rounded-pill">
            <i class="fa fa-fighter-jet" aria-hidden="true"></i> no.{" "}
            {props.list.flight_number !== null
              ? props.list.flight_number
              : "Not mentioned"}
          </p>
          <div>
            <ul className="list-style">
              <li>
                {props.list.wikipedia !== null ? (
                  <a href={props.list.wikipedia} target="_blank">
                    Wikipedia
                  </a>
                ) : (
                  "No links"
                )}
              </li>
            </ul>
          </div>
          <Link
            to={`/rocket/${props.list.rocket_id}`}
            class="btn btn-secondary btn-sm"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RocketsCard;
