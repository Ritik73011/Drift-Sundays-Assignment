import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import {database,ref,onValue,update} from '../../config/config'
const AdminSocialIcon = () => {
    const [data,setData] = useState({});
    const starCountRef = ref(database, "SocialLinks/");
  
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleClick = ()=>{
        update(ref(database,"SocialLinks/"),{...data});
        alert('updated successfully');
    }
    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setData(data);
        });
      },[])
  return (
    <Box sx={{textAlign:"left"}}>
       {
        Object.keys(data).length>0? <Box>
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.facebook} type={'text'} name='facebook' onChange={handleChange}  id="outlined-basic" label="Facebook url" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.instagram} type={'text'} name='instagram' onChange={handleChange}  id="outlined-basic" label="Instagram url" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.linkedin} type={'text'} name='linkedin' onChange={handleChange}  id="outlined-basic" label="Linkedin url" variant="outlined" />
        <br />

        <Button onClick={handleClick} sx={{width:"100%",maxWidth:"320px",background:"aqua",color:"black",padding:"16px",fontWeight:"bolder",":hover":{background:"green"},display:"block",margin:"auto",marginTop:"24px"}}>UPDATE</Button>
        </Box>:""
       }
    </Box>
  )
}

export default AdminSocialIcon