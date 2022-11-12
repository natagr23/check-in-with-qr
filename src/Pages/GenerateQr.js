import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputEmployee from './InputEmployee';
import { db } from '../Pages/Firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));

function GenerateQr() {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setEmployees(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
      empleado: input,
      latitud: latitude,
      longitud: longitude,
      timestamp: serverTimestamp(),
    });
    console.log('click');
    setInput('');
  };
  console.log(employees);

  return (
    <div>
      <form>
        <Typography variant="h6" noWrap component="div">
          Generar código QR
        </Typography>

        <TextField
          id="outlined-basic"
          label="Nombre Empleado"
          variant="outlined"
          style={{ margin: '0px 5px' }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Latitud"
          variant="outlined"
          style={{ margin: '0px 5px' }}
          size="small"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Longitud"
          variant="outlined"
          style={{ margin: '0px 5px' }}
          size="small"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Agregar
        </Button>
      </form>
      <List
        sx={{
          listStyleType: 'disc',
          pl: 2,
          '& .MuiListItem-root': {
            display: 'list-item',
          },
        }}
      >
        <ListItem
          sx={{
            display: 'list-item',
          }}
        >
          {employees.map((item) => (
            <InputEmployee key={item.id} arr={item} />
          ))}
        </ListItem>
      </List>
    </div>
  );
}

export default GenerateQr;
