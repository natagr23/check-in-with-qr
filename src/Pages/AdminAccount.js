import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, ListItem } from '@mui/material';
import { Context } from '../Pages/Context';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Locations from './Locations';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Pages/Firebase';

import { QRCodeSVG } from 'qrcode.react';
import EmployeeCard from './EmployeeCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));

export default function AdminAccount() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setEmployees(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
  const ctx = useContext(Context);
  let navigate = useNavigate();

  const [url, setUrl] = useState(
    'https://picturesofpeoplescanningqrcodes.tumblr.com/'
  );
  const [identification, setIdentification] = useState('CC 20365987');
  const call_Url = (product) => {
    setUrl(product.url);
    // setIdentification(employees.item.empleado);
  };

  const handleLogout = () => {
    navigate('/');
    ctx.currentUser = 1;
  };

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
        <Typography variant="h6" noWrap component="div">
          Sedes
        </Typography>

        <Stack spacing={2}>
          {employees.map((employee) => {
            return (
              <EmployeeCard
                key={employee.item.id}
                empleado={employee.item.empleado}
                id={employee.item.id}
                latitud={employee.item.latitud}
                longitud={employee.item.longitud}
                // image_url={product.image_url}
                // OnSelectProduct={ctx.handleOpenMarker}
                // onClick={ctx.selectProduct}
                // product={employee}
              />
            );
          })}
        </Stack>

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Products List</Item>
              {/* <Locations url={url} call_Url={call_Url} /> */}
              <Stack spacing={1}>
                {employees.map((employee) => {
                  return (
                    <Button
                      key={employee.item.id}
                      onClick={() => {
                        call_Url(employee.item.latitude);
                      }}
                      variant="contained"
                      color="success"
                    >
                      {employee.item.empleado}
                    </Button>
                  );
                })}
                <div>{url}</div>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Item>QR</Item>
              {employees.map((employee) => {
                return (
                  <Item>
                    <QRCodeSVG
                      value={employee.item.empleado}
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
                );
              })}
            </Grid>
          </Grid>
        </Box>
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
