import React, { useEffect, useContext, useState } from 'react';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { db } from './Firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));

const InputEmployee = ({ employee }) => {
  const [url, setUrl] = useState(
    'https://picturesofpeoplescanningqrcodes.tumblr.com/'
  );
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

  const call_Url = (product) => {
    setUrl(product.url);
  };
  return (
    <Box
      sx={{
        marginTop: 0,
        // display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <List className="todo__list">
            <ListItem>
              <ListItemAvatar />
              <ListItemText
                primary={employee.item.empleado}
                secondary={'empleado'}
              />
              <ListItemText
                primary={employee.item.latitud}
                secondary={'latitud'}
              />
              <ListItemText
                primary={employee.item.longitud}
                secondary={'longitud'}
              />
            </ListItem>
            <DeleteIcon
              fontSize="large"
              style={{ opacity: 0.5 }}
              onClick={() => {
                deleteDoc(doc(db, 'todos', employee.id));
              }}
            />
          </List>
        </Grid>
        <Grid item xs={6}>
          imagen
          <Item>
            <QRCodeSVG
              key={employee.item.id}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputEmployee;
