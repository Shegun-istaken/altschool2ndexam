import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, Outlet, useLocation } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { Helmet, HelmetProvider } from "react-helmet-async";

// var user ="shegun-istaken";

function Repo() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const user = location.state;

  const { loading, error, data } = useFetch(
    `https://api.github.com/users/${user}/repos`
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <h1>Error</h1>;
  }

  const onePage = 5;
  const total = data?.length;
  const pages = Math.ceil(data?.length / onePage);
  const skip = page * onePage - onePage;

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="maindiv">
      <Helmet>
        <title>Shegun's Repositories</title>
        <meta
          name="description"
          content={`Assess the full list of ${user}'s repositories here`}
        />
      </Helmet>

      <Link to="/">
        <button id="head">Return to HomePage</button>
      </Link>
      <h1 className="main-header">{user}'s Repositories</h1>
      <Outlet />

      {data?.slice((page - 1) * onePage, page * onePage).map((each) => (
        <div key={each.id}>
          <Link to={`/repos/${each.id}`} state={`${user}`}>
            <button onClick={handleClick}>{each.name}</button>
          </Link>
        </div>
      ))}
      <div className="pagination-jump">
        {
          <button
            className="pag-action"
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
        }
        <p className="pagination">
          Pages: {page} of {pages}
        </p>
        {
          <button
            className="pag-action"
            disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            next
          </button>
        }
      </div>

      <div className="pagination-div">
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each, index) => (
            <button
              key={index}
              className="pagination-buttons"
              onClick={() => setPage(each)}
            >
              {each}
            </button>
          )
        )}
      </div>
    </div>
  );
}

function Repos() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Repo />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default Repos;
