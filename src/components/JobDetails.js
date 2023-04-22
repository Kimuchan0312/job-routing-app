import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Divider, Dialog } from '@mui/material';
import apiService from '../app/apiService';
import SkillChips from './SkillChips';

function JobDetails({open, onClose, jobId}) {
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (jobId) {
          apiService
            .get(`/jobs/${jobId}`)
            .then((response) => setJob(response.data))
            .catch((error) => console.error(error));
        }
      }, [jobId]);

if (!job) {
    return null;
}

  return (
    <Dialog open={open} onClose={onClose}>
    <Card>
        <CardContent>
        <Typography variant="h4" component="h1">
            {job.title}
        </Typography>
        <Divider sx={{ marginBottom: '0.5rem' }} />
        <Typography>
            {job.description}
        </Typography>
        <Typography sx={{ margin: '0.2rem' }}>Skills:</Typography>
        <SkillChips skills={job.skills}/>
        <Typography>City: {job.city}</Typography>
        </CardContent>
    </Card>
    </Dialog>
  )
}

export default JobDetails