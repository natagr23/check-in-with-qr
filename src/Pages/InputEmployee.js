import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { db } from './Firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const InputEmployee = ({ arr }) => {
  return (
    <Box
      sx={{
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar />
          <ListItemText primary={arr.item.empleado} secondary={'empleado'} />
          <ListItemText primary={arr.item.latitud} secondary={'latitud'} />
          <ListItemText primary={arr.item.longitud} secondary={'longitud'} />
        </ListItem>
        <DeleteIcon
          fontSize="large"
          style={{ opacity: 0.7 }}
          onClick={() => {
            deleteDoc(doc(db, 'todos', arr.id));
          }}
        />
      </List>
    </Box>
  );
};

export default InputEmployee;
