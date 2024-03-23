import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TeamCard({imgSrc,name,position}) {
  return (
    <Card sx={{ maxWidth: 250 }} className='mb-8'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='bg-purple-200'>
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
