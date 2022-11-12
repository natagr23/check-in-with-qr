import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
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
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
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
      latitud: input2,
      longitud: input3,
      timestamp: serverTimestamp(),
    });
    console.log('click');
    setInput('');
  };
  console.log(todos);

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
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Longitud"
          variant="outlined"
          style={{ margin: '0px 5px' }}
          size="small"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Agregar
        </Button>
      </form>
      <ul>
        {todos.map((item) => (
          <InputEmployee key={item.id} arr={item} />
        ))}
      </ul>
    </div>
  );
}

export default GenerateQr;