import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EmployeeCard(props) {
  return (
    <Card
      // onClick={click_handler}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image={props.image_url}
          image="https://source.unsplash.com/1600x900/?vegetable"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.empleado}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.latitud}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.longitud}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
