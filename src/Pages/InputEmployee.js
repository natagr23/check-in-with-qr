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
import { db } from './Firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const InputEmployee = ({ arr }) => {
  const [url, setUrl] = useState(
    'https://picturesofpeoplescanningqrcodes.tumblr.com/'
  );
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
                primary={arr.item.empleado}
                secondary={'empleado'}
              />
              <ListItemText primary={arr.item.latitud} secondary={'latitud'} />
              <ListItemText
                primary={arr.item.longitud}
                secondary={'longitud'}
              />
              <Button
                variant="contained"
                color="primary"
                // onClick={addTodo}
              >
                código QR
              </Button>
            </ListItem>
            <DeleteIcon
              fontSize="large"
              style={{ opacity: 0.5 }}
              onClick={() => {
                deleteDoc(doc(db, 'todos', arr.id));
              }}
            />
          </List>
        </Grid>
        <Grid item xs={6}>
          imagen
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputEmployee;
