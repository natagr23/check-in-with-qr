import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
// import { AuthContext } from '../AuthContext/AuthContext';
import Stack from '@mui/material/Stack';

export default function EmployeeAccount() {
  //   const ctx = useContext(AuthContext);

  //   let navigate = useNavigate();
  //   useEffect(() => {
  //     navigate('/Pages/EmployeeAccount');
  //   }, [navigate]);
  return (
    <>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div> Account Employee</div>
        <p> Account...Employee</p>

        <Stack direction="row" spacing={2}>
          <Button>Create Products</Button>
        </Stack>
      </Box>
    </>
  );
}
