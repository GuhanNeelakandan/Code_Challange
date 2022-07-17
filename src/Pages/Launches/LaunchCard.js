import React from "react";
import { Link } from "react-router-dom";

function LaunchCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-5">
      <div class="card style-card">
        <div class="card-body">
          <h5 class="card-title">{props.list.mission_name}</h5>
          <p class="card-text details-style">{props.list.details}</p>
          <p className="rounded-pill">
            <i class="fa fa-fighter-jet" aria-hidden="true"></i> no.{" "}
            {props.list.flight_number !== null
              ? props.list.flight_number
              : "Not mentioned"}
          </p>
          <div>
            <ul className="list-style">
              <li>
                {props.list.links.reddit !== null ? (
                  <a href={props.list.links.reddit} target="_blank">
                    Reddit
                  </a>
                ) : (
                  "No links"
                )}
              </li>
              <li>
                {props.list.links.article !== null ? (
                  <a href={props.list.links.article_link} target="_blank">
                    Article
                  </a>
                ) : (
                  "No links"
                )}
              </li>
              <li>
                {props.list.links.wikipedia !== null ? (
                  <a href={props.list.links.wikipedia} target="_blank">
                    Wikipedia
                  </a>
                ) : (
                  "No links"
                )}
              </li>
            </ul>
          </div>
          <Link
            to={`/launch/${props.list.flight_number}`}
            class="btn btn-secondary btn-sm"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchCard;
