import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Miss() {
  return (
    <div className="missing">
      <Helmet>
        <title>Shegun's Repositories</title>
        <meta
          name="description"
          content="This page does not exist. Try heading back to the homepage"
        />
      </Helmet>
      <h2>This page does not exist here</h2>
      <Link to="/">Click to jump to the Repositories Page</Link>
    </div>
  );
}

function Missing(){
    return(
        <HelmetProvider>
            <Miss />
        </HelmetProvider>
    )
}

export default Missing;
