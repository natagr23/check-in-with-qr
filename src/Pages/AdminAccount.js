import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Context } from '../Pages/Context';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Locations from './Locations';

import { QRCodeSVG } from 'qrcode.react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AdminAccount() {
  const ctx = useContext(Context);
  let navigate = useNavigate();

  const [url, setUrl] = useState(
    'https://picturesofpeoplescanningqrcodes.tumblr.com/'
  );
  const call_Url = (product) => {
    setUrl(product.url);
  };

  const handleLogout = () => {
    navigate('/');
    ctx.currentUser = 1;
  };
  // const ctx = useContext(AuthContext);

  useEffect(() => {
    navigate('/Pages/AdminAccount');
    ctx.currentUser = 2;
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

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Products List</Item>
              <Locations url={url} call_Url={call_Url} />
            </Grid>
            <Grid item xs={8}>
              <Item>QR</Item>
              <Item>
                <QRCodeSVG
                  value={url}
                  size={128}
                  bgColor={'#ffffff'}
                  fgColor={'#000000'}
                  level={'L'}
                  includeMargin={false}
                  imageSettings={{
                    src: 'https://static.zpao.com/favicon.png',
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
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
