import { Component } from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", }}>
      <h2>There was an error with this Page. </h2>
      <Link to="/">Click here to return Home</Link>
    </div>
  );
}

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
export { Error };
