import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Context } from '../Pages/Context';

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
        {/* <GenerateQr /> */}

        <hr />
        <hr />
        <hr />
        <hr />

        <Stack sx={{ width: '60%' }} spacing={2}>
          <Alert severity="success">
            Su código QR ha sido generado exitosamente!
          </Alert>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Button variant="contained" label="SignOut" onClick={handleLogout}>
            SignOut{''}
          </Button>
        </Stack>
      </Box>
    </>
  );
}
