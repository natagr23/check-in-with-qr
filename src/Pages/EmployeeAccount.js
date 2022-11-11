import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Context } from '../Pages/Context';
import Stack from '@mui/material/Stack';

export default function EmployeeAccount() {
  const ctx = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/Pages/EmployeeAccount');
    ctx.currentUser = 3;
  }, [ctx, navigate]);

  const handleLogout = () => {
    navigate('/');
    ctx.currentUser = 1;
  };

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
      <Button
        sx={{ marginLeft: '800px' }}
        variant="contained"
        label="SignOut"
        onClick={handleLogout}
      >
        SignOut{''}
      </Button>
    </>
  );
}
