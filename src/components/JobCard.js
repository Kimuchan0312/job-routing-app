import React from 'react'
import { Card, Typography, CardContent, Button, Divider} from '@mui/material'
import SkillChips from './SkillChips'
import OpenLogin from '../components/OpenLogin';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function JobCard({ job }) {

  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  const openLogin = (event) => {
    event.stopPropagation();
    setOpenLoginModal(true);
  };

  const closeLogin = () => {
    setOpenLoginModal(false);
  };

  return (
    <Card sx={{ height: "550px" }}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Divider sx={{ marginBottom: '0.5rem'}}/>
        <SkillChips skills={job.skills}/>
        <Typography variant="body2">{job.description}</Typography>
        <Button variant="contained" sx={{ marginTop: '1rem'}} onClick={(event) => openLogin(event)}>Learn more</Button>
        <Dialog open={openLoginModal} onClose={closeLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <OpenLogin onSuccess={closeLogin}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLogin}>Forgot Password?</Button>
          <Button onClick={closeLogin}>Don't have an account? Sign Up</Button>
        </DialogActions>
      </Dialog>
      </CardContent>
    </Card>
  )
}

export default JobCard