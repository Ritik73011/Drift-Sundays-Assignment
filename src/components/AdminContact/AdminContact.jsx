import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import {database,ref,onValue,update} from '../../config/config'
const AdminContact = () => {
    const [data,setData] = useState({});
    const starCountRef = ref(database, "Contact/");
  
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleClick = ()=>{
        update(ref(database,"Contact/"),{...data});
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
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.aboutCompany} type={'text'} name='aboutCompany' onChange={handleChange}  id="outlined-basic" label="About company" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.cover} type={'text'} name='cover' onChange={handleChange}  id="outlined-basic" label="Background cover image" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.email} type={'text'} name='email' onChange={handleChange}  id="outlined-basic" label="Email" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.phoneNum} type={'text'} name='phoneNum' onChange={handleChange}  id="outlined-basic" label="Phone number" variant="outlined" />
        <br />

        <Button onClick={handleClick} sx={{width:"100%",maxWidth:"320px",background:"aqua",color:"black",padding:"16px",fontWeight:"bolder",":hover":{background:"green"},display:"block",margin:"auto",marginTop:"24px"}}>UPDATE</Button>
        </Box>:""
       }
    </Box>
  )
}

export default AdminContact