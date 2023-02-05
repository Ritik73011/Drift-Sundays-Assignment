import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import {database,ref,onValue,update} from '../../config/config'
const AdminHome = () => {
    const [data,setData] = useState({});
    const starCountRef = ref(database, "Home/");
  
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleClick = ()=>{
        update(ref(database,"Home/"),{...data});
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
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.leftBackgroundImg} type={'text'} name='leftBackgroundImg' onChange={handleChange}  id="outlined-basic" label="Left background image url" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.title} type={'text'} name='title' onChange={handleChange}  id="outlined-basic" label="Left Title" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.content1} type={'text'} name='content1' onChange={handleChange}  id="outlined-basic" label="Left Content 1" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.content2} type={'text'} name='content2' onChange={handleChange}  id="outlined-basic" label="Left Content 2" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.content3} type={'text'} name='content3' onChange={handleChange}  id="outlined-basic" label="Left Content 3" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.podium} type={'text'} name='podium' onChange={handleChange}  id="outlined-basic" label="Podium" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.satisfiedCus} type={'text'} name='satisfiedCus' onChange={handleChange}  id="outlined-basic" label="Satisfied customers" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.brokenEngines} type={'text'} name='brokenEngines' onChange={handleChange}  id="outlined-basic" label="Broken engines" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.burntWheels} type={'text'} name='burntWheels' onChange={handleChange}  id="outlined-basic" label="Burnt wheels" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.mainVideoCoverImg} type={'text'} name='mainVideoCoverImg' onChange={handleChange}  id="outlined-basic" label="Video cover image" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.mainVideo} type={'text'} name='mainVideo' onChange={handleChange}  id="outlined-basic" label="Video url" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomImg1} type={'text'} name='bottomImg1' onChange={handleChange}  id="outlined-basic" label="Bottom image url 1" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomImg2} type={'text'} name='bottomImg2' onChange={handleChange}  id="outlined-basic" label="Bottom image url 2" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomImg3} type={'text'} name='bottomImg3' onChange={handleChange}  id="outlined-basic" label="Bottom image url 3" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomTitle1} type={'text'} name='bottomTitle1' onChange={handleChange}  id="outlined-basic" label="Bottom title 1" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomTitle2} type={'text'} name='bottomTitle2' onChange={handleChange}  id="outlined-basic" label="Bottom title 2" variant="outlined" />
        <TextField sx={{maxWidth:"320px",width:"100%",margin:"8px"}} value={data.bottomTitle3} type={'text'} name='bottomTitle3' onChange={handleChange}  id="outlined-basic" label="Bottom title 3" variant="outlined" />
        <br />

        <Button onClick={handleClick} sx={{width:"100%",maxWidth:"320px",background:"aqua",color:"black",padding:"16px",fontWeight:"bolder",":hover":{background:"green"},display:"block",margin:"auto",marginTop:"24px"}}>UPDATE</Button>
        </Box>:""
       }
    </Box>
  )
}

export default AdminHome