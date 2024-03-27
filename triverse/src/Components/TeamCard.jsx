import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TeamCard({imgSrc,name,position}) {
  return (
    <Card sx={{ maxWidth: 250, minWidth:250 , maxHeight:300}} className='mb-8'>
      <CardActionArea>
        <div style={{ maxHeight: 200, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="100%"
            style={{ objectFit: 'fit' }}
            image={imgSrc}
            alt="Team member"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className=''>
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
