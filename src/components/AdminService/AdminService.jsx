import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import {database,ref,onValue,update} from '../../config/config'
const AdminService = () => {
    const [data,setData] = useState({});
    const starCountRef = ref(database, "Service/");
  
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleClick = ()=>{
        update(ref(database,"Service/"),{...data});
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
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.aboutDrift} type={'text'} name='aboutDrift' onChange={handleChange}  id="outlined-basic" label="About drift" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.carName} type={'text'} name='carName' onChange={handleChange}  id="outlined-basic" label="Car name" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.carImg} type={'text'} name='carImg' onChange={handleChange}  id="outlined-basic" label="Car image url" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.carPrice} type={'text'} name='carPrice' onChange={handleChange}  id="outlined-basic" label="Car price" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.carTitle} type={'text'} name='carTitle' onChange={handleChange}  id="outlined-basic" label="Car title" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.duration} type={'text'} name='duration' onChange={handleChange}  id="outlined-basic" label="Drift duration" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.aboutCar} type={'text'} name='aboutCar' onChange={handleChange}  id="outlined-basic" label="About car" variant="outlined" />
        <br />

        <Button onClick={handleClick} sx={{width:"100%",maxWidth:"320px",background:"aqua",color:"black",padding:"16px",fontWeight:"bolder",":hover":{background:"green"},display:"block",margin:"auto",marginTop:"24px"}}>UPDATE</Button>
        </Box>:""
       }
    </Box>
  )
}

export default AdminService