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
          image={'https://yt3.googleusercontent.com/XADM740du4Inz2nZRJ0E8CIuRi56umG_2etoAR0fnYz2pfBlylRYbj2UuFbG3rcy9oC0dUQy=s900-c-k-c0x00ffffff-no-rj'}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sidharth Mall
          </Typography>
          <Typography variant="body2" color="text.secondary" className=''>
            Chairperson
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
