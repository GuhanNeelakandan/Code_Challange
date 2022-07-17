import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import HistoryCard from "./HistoryCard";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

function History() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [serach, setSerach] = useState(0);

  const { data, loading, error, reFetch } = useFetch(
    "https://api.spacexdata.com/v3/history"
  );
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container-fluid">
        <Link to={"/"}>
          <button className="btn btn-secondary mx-4 mt-4 rounded-circle">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="text-center mt-4">
          <h1>History</h1>
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
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
                      (list.title.toLowerCase().includes(serach.toLowerCase()),
                      list.flight_number)
                    )
                      return list;
                  })
                  .map((list) => {
                    return <HistoryCard list={list} />;
                  })}
              </>
            )}
          </div>

          {error && error.message}
        </div>
      </div>
    </>
  );
}

export default History;
