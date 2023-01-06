import useFetch from "../hooks/useFetch";
import { Link, useParams, useLocation} from "react-router-dom";

function RepoPage() {
    const { userId } = useParams();
    const location = useLocation()
    const user = location.state

    const { loading, error, data } = useFetch(
      `https://api.github.com/users/${user}/repos`
    );
  
    if (loading) {
      return <>Loading...</>;
    }
  
    if (!loading && error) {
      return <h1>Error</h1>;
    }
  
    return (
      <>
        {data?.map((each) => (
          <div key={each.id} className="page">
            {/* eslint-disable-next-line */}
            {each.id == userId && (
              <>
                <h1>
                  <span>Repo Name: </span>
                  {each.name}
                </h1>
                <a href={each.html_url} target="_blank" rel="noreferrer">
                  Click Here to Access the Repo
                </a>
                <div className="repo-details">
                  <p>
                    <span>Owner: </span>
                    {each.owner.login}
                  </p>
                  {each.private ? <p>Private</p> : <p>Public</p>}
                  <p>
                    <span>Forks: </span>
                    {each.forks}
                  </p>
                  <p>
                    <span>Open Issues: </span>
                    {each.open_issues}
                  </p>
                  <p>
                    <span>Date Created: </span>
                    {each.created_at.slice(0, 10)}
                  </p>
                  <p>
                    <span>Time Created: </span>
                    {each.created_at.slice(11, 16)}
                  </p>
                </div>
  
                <Link to="/" ><button className="see-only">Back to Repos</button></Link>
              </>
            )}
          </div>
        ))}
      </>
    );
  }

  export default RepoPage;