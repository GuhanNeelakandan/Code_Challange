import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import useFetch from "../../hooks/useFetch";
import LaunchCard from "./LaunchCard";

function Launch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [serach, setSerach] = useState(0);
  const { data, loading, error, reFetch } = useFetch(
    "https://api.spacexdata.com/v3/launches"
  );
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
          <h1>Launches</h1>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search...."
            onChange={(event) => {
              setSerach(event.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
        <div className="container-fluid">
          <div className="row ">
            {loading ? (
              "Loading"
            ) : (
              <>
                {currentPosts
                  .filter((list) => {
                    if (serach == "") {
                      return list;
                    } else if (
                      list.mission_name
                        .toLowerCase()
                        .includes(serach.toLowerCase())
                    )
                      return list;
                  })
                  .map((list) => {
                    return <LaunchCard list={list} />;
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

export default Launch;
