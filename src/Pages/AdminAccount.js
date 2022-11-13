import React, { useEffect, useContext, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import Autocomplete from '@mui/material/Autocomplete';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Pages/Firebase';

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
  const ctx = useContext(Context);
  const [employees, setEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(
    ctx.officeLocationList[0]
  );
  const [selectedEmployee, setSelectedEmployee] = useState(ctx.employeeList[0]);

  const refNameLocation = useRef();
  const refLocationId = useRef();
  const { emailLink } = useParams();
  useEffect(() => {
    console.log(emailLink);
  }, [emailLink]);

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

  const employeeHandler = (e) => {
    e.preventDefault();
    ctx.addNewEmployee(newEmployeeName, newEmployeeEmail);
  };

  const officeLocationHandler = (e) => {
    e.preventDefault();
    ctx.addNewOfficeLocation(
      refNameLocation.current.value,
      refLocationId.current.value
    );
  };

  //escribo name porque el autocomplete me guarda el objeto seleccionado
  const officeLocationPerEmployeeHandler = (e) => {
    e.preventDefault();
    ctx.addNewemployeePerOffice(selectedLocation.name, selectedEmployee.email);
  };

  useEffect(() => {
    navigate('/Pages/AdminAccount');
    ctx.currentUser = 2;
  }, [ctx, navigate]);
  return (
    <Stack
      spacing={2}
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        marginLeft: 40,
        // display: 'flex',
        // flexDirection: 'column',
        maxWidth: '70%',
      }}
    >
      <Typography variant="h6" noWrap component="div">
        Lista de Empleados
      </Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          name="title"
          onChange={(e) => setNewEmployeeName(e.target.value)}
          value={newEmployeeName}
          placeholder="Nombre del Empleado"
          variant="filled"
          id="add Product"
          label="Nombre del Empleado"
        />

        <TextField
          variant="filled"
          placeholder="Email del Empleado"
          onChange={(e) => setNewEmployeeEmail(e.target.value)}
          value={newEmployeeEmail}
          label="Email del Empleado"
        />

        <Button variant="contained" type="submit" onClick={employeeHandler}>
          Add
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre del Empleado</TableCell>
            <TableCell>Identificacion</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <Table>
          <TableBody>
            {ctx.employeeList.map((employee) => {
              return (
                <TableRow key={employee.email}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      type="submit"
                      color="error"
                      onClick={() => {
                        ctx.deleteEmployee(employee);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" noWrap component="div">
        Lista de Sedes
      </Typography>
      <Stack spacing={3}>
        <form onSubmit={officeLocationHandler}>
          <input
            name="title"
            // onChange={(e) => setProductName(e.target.value)}
            // value={productName}
            ref={refNameLocation}
            placeholder="Nombre de Ciudad de la Sede"
            variant="filled"
            id="add Product"
            label="Nombre de Ciudad de la Sede"
          />

          <input
            // onChange={(e) => setProductDescription(e.target.value)}
            variant="filled"
            ref={refLocationId}
            placeholder="Identificacción de la Sede"
            // value={productDescription}
            label="Identificacción de la Sede"
          />
        </form>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="baseline"
          spacing={1}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={officeLocationHandler}
          >
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
        <form onSubmit={officeLocationPerEmployeeHandler}>
          {/* <input
            name="title"
            ref={refNameLocationPerEmployee}
            // onChange={(e) => setProductName(e.target.value)}
            // value={productName}
            placeholder="Nombre de la Sede"
            variant="filled"
            id="add Product"
            label="Nombre de la Sede"
          /> */}

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(sede) => sede.name}
            value={selectedLocation}
            onChange={(event, newValue) => {
              setSelectedLocation(newValue);
            }}
            options={ctx.officeLocationList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Sede" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(empleado) =>
              `${empleado.name} (${empleado.email})`
            }
            value={selectedEmployee}
            onChange={(event, newValue) => {
              setSelectedEmployee(newValue);
            }}
            options={ctx.employeeList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Empleado" />}
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="baseline"
            spacing={1}
          >
            <Button
              variant="contained"
              type="submit"
              onClick={officeLocationPerEmployeeHandler}
            >
              Add
            </Button>
          </Stack>
        </form>
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

      <Button variant="contained" label="SignOut" onClick={handleLogout}>
        SignOut{''}
      </Button>
    </Stack>
  );
}
