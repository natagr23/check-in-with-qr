import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Context } from '../Pages/Context';
import Stack from '@mui/material/Stack';

export default function AdminAccount() {
  const ctx = useContext(Context);
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    // ctx.currentUser = null;
  };
  // const ctx = useContext(AuthContext);

  useEffect(() => {
    navigate('/Pages/AdminAccount');
    ctx.updateUser();
  }, [ctx, navigate]);
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
        <div> Account Admin</div>
        <p> Account...Admin</p>

        <Stack direction="row" spacing={2}>
          <Button>Create Products</Button>
        </Stack>
        <Button
          sx={{ marginLeft: '800px' }}
          variant="contained"
          label="SignOut"
          onClick={handleLogout}
        >
          SignOut{''}
        </Button>
      </Box>
    </>
  );
}
