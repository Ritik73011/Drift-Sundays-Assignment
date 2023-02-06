import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { database, ref, onValue } from "../../config/config";
import { useEffect, useState } from "react";
const Footer = () => {
  const [data, setData] = useState({});
  const [social, setSocial] = useState({});
  const starCountRef = ref(database, "Contact/");
  const socialRef = ref(database, "SocialLinks/");
  const faceClick = () => {
    window.open(social.facebook, "_blank");
  };
  const instaClick = () => {
    window.open(social.instagram, "_blank");
  };
  const linkClick = () => {
    window.open(social.linkedin, "_blank");
  };
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    onValue(socialRef, (snapshot) => {
      const data = snapshot.val();
      setSocial(data);
    });
  }, []);
  return (
    <Box sx={{background:"#070707"}}>
        <Box sx={{padding:"24px"}}>
        <Typography variant='h4' sx={{color:"white",fontWeight:"bolder"}}>Drift Sunday</Typography>
          <Box sx={{display:"flex",color:"white",justifyContent:"space-around",textAlign:"left",flexWrap:"wrap"}}>
            <Box>
            <Typography>{data.email}</Typography>
            <Typography>+91{data.phoneNum}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
            <FacebookIcon
            onClick={faceClick}
            fontSize="large"
            sx={{ color: "#0883e8", cursor: "pointer" }}
          />
          <InstagramIcon
            onClick={instaClick}
            fontSize="large"
            sx={{ color: "#e83a55", cursor: "pointer" }}
          />
          <LinkedInIcon
            onClick={linkClick}
            fontSize="large"
            sx={{ color: "#0073b1", cursor: "pointer" }}
          />
            </Box>
          </Box>
          <Typography sx={{color:"white",marginTop:"10px"}} fontSize='12px'>© 2023 Ritik Kumar Singh | All Rights Reserved</Typography>
        </Box>
    </Box>
  )
}

export default Footer