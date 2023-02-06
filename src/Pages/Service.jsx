import { Box, Typography, Slide, Button, useMediaQuery } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {database,ref,onValue} from '../config/config'
import { useEffect, useState } from "react";
const Service = () => {
  const [data,setData] = useState({});
  const starCountRef = ref(database, "Service/");
  const media = useMediaQuery("(max-width:768px)");
  
  useEffect(()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  },[])
  return (
    <Box sx={{ textAlign: "left", padding: "40px 32px",marginTop:media?"51px":"65px" }}>
      <Box sx={{}}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bolder", letterSpacing: "2px" }}
        >
          OUR SERVICES
        </Typography>
      </Box>
      <Slide direction="down" in mountOnEnter unmountOnExit>
        <Box sx={{ display: media?"grid":"flex", width: "100%", marginTop: "24px" }}>
          <Box sx={{ maxWidth: "320px", width: "100%" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: "bolder",
                color: "grey",
              }}
            >
              {"q1. drift"}
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            {data.aboutDrift}
          </Box>
        </Box>
      </Slide>

      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Box sx={{ display: media?"grid":"flex", width: "100%", marginTop: "24px" }}>
          <Box sx={{ maxWidth: "320px", width: "100%" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: "bolder",
                color: "darkgrey",
              }}
            >
              {data.carName}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: media?"grid":"flex", width: "100%", gap: "16px" }}>
              <Box
                sx={{
                  maxWidth: "300px",
                  minWidth: "180px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={data.carImg}
                  alt="green car"
                />
                <Typography
                  sx={{
                    padding: "6px 16px",
                    background: "#ffe900",
                    width: "max-content",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    borderRadius: "0 0 0 8px",
                  }}
                >
                  {data.carPrice}€
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                    fontSize: "32px",
                  }}
                >
                  {data.carTitle}
                </Typography>

                <Typography sx={{ marginTop: "10px" }}>
                 {data.aboutCar}
                </Typography>
              </Box>
            </Box>

            <Box sx={{marginTop:"24px"}}>
              <Typography>Manual Transmission</Typography>
              <Box sx={{display:"flex",gap:"16px",marginTop:"16px"}}>
                    <AccessTimeIcon/>
                    <Typography>{data.duration}</Typography>
              </Box>
            </Box>

            <Box sx={{display:"flex",justifyContent:"end",marginTop:"8px"}}>
                  <Box sx={{display:"flex",gap:"8px",width:"100%",marginTop:"10px",justifyContent:"end"}}>
                      <Button sx={{maxWidth:"250px",width:"100%",padding:"16px",fontSize:"12px",fontWeight:"bolder",background:"lightgrey",color:"black"}}>Buy a gift certificate</Button>
                      <Button sx={{maxWidth:"250px",width:"100%",padding:"16px",fontSize:"12px",fontWeight:"bolder",background:"#ffe900",color:"black"}}>Submit Your Application</Button>
                  </Box>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default Service;
