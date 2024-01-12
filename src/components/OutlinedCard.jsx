import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Folder, FolderOutlined } from '@mui/icons-material';
import { Rating } from '@mui/material';



export default function OutlinedCard({title,user,description,rating,date}) {
  return (
    
      <Card variant="outlined" sx={{ ml:3,mt:1.5,borderRadius:'5px', border:'none', width:'75vw', height:'70px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
       <Box sx={{display:'flex',alignItems:'center',ml:5,mt:0.5, width:300}}>
      <FolderOutlined sx={{mr:2, background:'rgba(0,0,0,0.2)',borderRadius:100,padding:1}}/>
      <Box sx={{display:'flex', flexDirection:'column'}}>  
            <Typography fontSize={15} fontWeight={700}>{title}</Typography>
            <Typography fontSize={11} fontWeight={300}>{description}</Typography>
            <Typography fontSize={10} fontWeight={600}>{user}</Typography>
</Box>
       </Box>
       <Box>{user}</Box>
<Box >{date}</Box>

<Box display={'flex'} alignItems={'center'} mr={2}>
<Rating name="read-only" value={rating} precision={0.1} defaultValue={0} size='small' readOnly sx={{mr:1}} />
{rating}
</Box>

        </Card>
    
  );
}