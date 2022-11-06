import useFetch from "../hooks/useFetch";
import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Repo() {
  const { loading, error, data } = useFetch(
    `https://api.github.com/users/shegun-istaken/repos`
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <h1>Error</h1>;
  }

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="maindiv">
      <Helmet>
        <title>Shegun's Repositories</title>
        <meta name="description" content="Assess the full list of Shegun's repositories here" />
      </Helmet>
      <h1 className="main-header">My Repositories</h1>
      <Outlet />

      {data?.map((each) => (
        <div key={each.id}>
          <Link to={`/repos/${each.id}`}>
            <button onClick={handleClick}>{each.name}</button>
          </Link>
        </div>
      ))}
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
