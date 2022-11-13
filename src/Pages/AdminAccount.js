import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import { Context } from '../Pages/Context';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Pages/Firebase';
import { QRCodeSVG } from 'qrcode.react';
// import EmployeeCard from './EmployeeCard';
// import GenerateQr from './GenerateQr';

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

  const call_Url = (product) => {
    setUrl(product.url);
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
          Lista de Empleados
        </Typography>
        <Stack spacing={3}>
          <TextField
            minRows={1}
            name="title"
            // onChange={(e) => setProductName(e.target.value)}
            // value={productName}
            placeholder=""
            variant="filled"
            id="add Product"
            label="Nombre del Empleado"
          />

          <TextField
            minRows={1}
            // onChange={(e) => setProductDescription(e.target.value)}
            variant="filled"
            placeholder=""
            // value={productDescription}
            label="Email del Empleado"
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="baseline"
            spacing={1}
          >
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Stack>
        </Stack>
        <div>
          <TableContainer component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Empleado</TableCell>
                <TableCell>Identificacion</TableCell>
              </TableRow>
            </TableHead>
            {ctx.employeeList.map((employee) => {
              return (
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>

                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                          color="error"
                          // onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              );
            })}
          </TableContainer>
        </div>
        <Typography variant="h6" noWrap component="div">
          Lista de Sedes
        </Typography>
        <Stack spacing={3}>
          <TextField
            minRows={1}
            name="title"
            // onChange={(e) => setProductName(e.target.value)}
            // value={productName}
            placeholder=""
            variant="filled"
            id="add Product"
            label="Nombre de Ciudad de la Sede"
          />

          <TextField
            minRows={1}
            // onChange={(e) => setProductDescription(e.target.value)}
            variant="filled"
            placeholder=""
            // value={productDescription}
            label="Identificación de la Sede"
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="baseline"
            spacing={1}
          >
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Stack>
        </Stack>
        <div>
          <TableContainer component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre de la Sede</TableCell>
                <TableCell>Identificacion</TableCell>
              </TableRow>
            </TableHead>
            {ctx.officeLocationList.map((office) => {
              return (
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>{office.name}</TableCell>
                      <TableCell>{office.id}</TableCell>

                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                          color="error"
                          // onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              );
            })}
          </TableContainer>
        </div>
        <Typography variant="h6" noWrap component="div">
          Lista de Sedes por Empleado
        </Typography>
        <Stack spacing={3}>
          <TextField
            minRows={1}
            name="title"
            // onChange={(e) => setProductName(e.target.value)}
            // value={productName}
            placeholder=""
            variant="filled"
            id="add Product"
            label="Nombre del Empleado"
          />

          <TextField
            minRows={1}
            // onChange={(e) => setProductDescription(e.target.value)}
            variant="filled"
            placeholder=""
            // value={productDescription}
            label="Nombre de la Sede"
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="baseline"
            spacing={1}
          >
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Stack>
        </Stack>
        <div>
          <TableContainer component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre de la Sede</TableCell>
                <TableCell>Nombre del Empleado</TableCell>
              </TableRow>
            </TableHead>
            {ctx.employeePerOfficeList.map((employeePerOffice) => {
              return (
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>{employeePerOffice.office}</TableCell>
                      <TableCell>{employeePerOffice.employee}</TableCell>

                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                          color="error"
                          // onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              );
            })}
          </TableContainer>
        </div>
        {/* <GenerateQr /> */}
        <Typography variant="h6" noWrap component="div">
          Verificación de la Identificación del Empleado
        </Typography>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Item> Empleado</Item>

              <Stack spacing={1}>
                {employees.map((employee) => {
                  return (
                    <Button
                      key={employee.item.id}
                      // onClick={() => {
                      //   call_Url(employee.item.latitude);
                      // }}
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
            <Grid item xs={3}>
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
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Latitud</TableCell>
                      <TableCell>Longitud</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{'Latitud'}</TableCell>
                      <TableCell>{'Longitud'}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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

{
  /* <Stack spacing={2}>
          {employees.map((employee) => {
            return (
              <EmployeeCard
                key={employee.item.id}
                empleado={employee.item.empleado}
                id={employee.item.id}
                latitud={employee.item.latitud}
                longitud={employee.item.longitud}
              />
            );
          })}
        </Stack> */
}
