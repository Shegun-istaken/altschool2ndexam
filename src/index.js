import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repo from "./pages/Repos";
import RepoPage from "./components/RepoPage";
import Missing from "./pages/Missing";
import ErrorTest from "./pages/TestError";
import Home from "./pages/Home";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/repos" element={<Repo />}>
            <Route path="/repos/:userId" element={<RepoPage />} />
            </Route>

          {/* The Error Test tests the Error Boundary */}
          <Route path="/errorTest" element={<ErrorTest />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

// reportWebVitals();
