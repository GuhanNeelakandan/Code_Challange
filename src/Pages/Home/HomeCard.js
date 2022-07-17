import React from "react";
import { Link } from "react-router-dom";

function HomeCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 card-style show-card">
      <div class="card  style-card">
        <div className="text-center">
          <img
            class="card-img-top img-style"
            src={props.list.image}
            alt="Card image cap"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.list.name}</h5>
          <p class="card-text">{props.list.description}</p>
          <Link
            to={
              props.list.page === "history"
                ? "/history"
                : props.list.page === "launch"
                ? "/launch"
                : "/rocket"
            }
            class="btn btn-secondary"
          >
            <i class="fa fa-search" aria-hidden="true"></i>Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
