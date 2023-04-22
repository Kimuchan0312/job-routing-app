import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import apiService from "../app/apiService";
import { Container } from "@mui/system";
import {
  Alert,
  Grid,
  Box,
  Typography,
  Pagination,
  useTheme,
} from "@mui/material";
import LoadingScreen from "../components/LoadingScreen";
import Header from "../layouts/Header";
import OpenLogin from "../components/OpenLogin";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const theme = useTheme();

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const limit = 9;
        const res = await apiService.get(`/jobs?_page=${page}&_limit=${limit}`);
        setJobs(res.data);
        const totalCount = parseInt(res.headers["x-total-count"], 10);
        setTotalPages(Math.ceil(totalCount / limit));
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getJobs();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.palette.primary.lighter,
        maxWidth: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Box>
        <Header />
        <Typography variant="h6" sx={{ margin: 2 }}>
          Latest Jobs
        </Typography>
        <Grid container spacing={2}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                jobs.map((job) => (
                  <Grid item xs={12} md={6} lg={4} key={job.id}>
                    <JobCard key={job.id} job={job} jobId={job.id} onLoginRequired={OpenLogin}/>
                  </Grid>
                ))
              )}
            </>
          )}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      </Box>
    </Container>
  );
}
export default HomePage;
