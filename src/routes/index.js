import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import JobDetails from "../components/JobDetails";
import OpenLogin from "../components/OpenLogin";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<OpenLogin />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
