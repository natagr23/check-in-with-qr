import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Context } from '../Pages/Context';
import { Link } from 'react-router-dom';
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
        <Typography variant="h6" noWrap component="div">
          Generar código QR
        </Typography>
        <Button
          sx={{ marginLeft: '10px' }}
          variant="contained"
          label="My Products"
          component={Link}
          to={'/'}
          // value={value}
        >
          Generate QR{''}
        </Button>

        <hr />
        <hr />
        <hr />
        <hr />
        <Stack direction="row" spacing={3}>
          <Button variant="contained" label="SignOut" onClick={handleLogout}>
            SignOut{''}
          </Button>
        </Stack>
      </Box>
    </>
  );
}
