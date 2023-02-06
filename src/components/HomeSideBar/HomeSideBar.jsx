import { Button, Slide, Typography,useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {database,ref,onValue} from '../../config/config'
import { useEffect, useState } from "react";
const HomeSideBar = () => {
  const [data,setData] = useState({});
  const [social,setSocial] = useState({});
  const starCountRef = ref(database, "Home/");
  const socialRef = ref(database, "SocialLinks/");
  const media = useMediaQuery("(max-width:768px)");
  
  const faceClick = ()=>{
    window.open(social.facebook,'_blank')
  }
  const instaClick = ()=>{
    window.open(social.instagram,'_blank')
  }
  const linkClick = ()=>{
    window.open(social.linkedin,'_blank')
  }
  useEffect(()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    onValue(socialRef, (snapshot) => {
      const data = snapshot.val();
      setSocial(data);
    });
  },[])
  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
    <Box
      sx={{
        maxWidth: media?"100%":"336px",
        width: "100%",
        background:
          `url("${data.leftBackgroundImg}")`,
        backgroundSize: "cover",
        textAlign: "left",
        minHeight: "91vh",
        position: "relative",
        order:media?"2":"1"
      }}
    >
      <Box sx={{ background: "rgba(0, 0, 0, 0.5)", padding: "24px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bolder",
            marginBottom: "24px",
          }}
          fontSize='38px'
        >
          {data.title}
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
          {data.content1}
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
        {data.content2}
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
        {data.content3}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "16px",
            marginTop: "18px",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              {data.brokenEngines}+
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Broken engines
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              {data.burntWheels}+
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Burnt wheels
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              &gt;{data.podium}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Took the podium
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              {data.satisfiedCus}%
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Satisfied customers
            </Typography>
          </Box>
        </Box>
        <Slide direction="left" in mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
            marginBottom: "7px",
          }}
        >
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
        </Slide>
      </Box>
      <Box sx={{ width: "100%", background: "rgba(0, 0, 0, 0.5)" }}>
        <Button
          sx={{
            backgroundColor: "#ffe900",
            color: "#333",
            width: "100%",
            borderRadius: "0",
            textTransform: "none",
            fontSize: "13px",
            padding: "16px",
            ":hover": { backgroundColor: "#ffe400" },
            position:"absolute",
            left:"0",
            right:"0",
            bottom:"0"
          }}
        >
          Submit your application
        </Button>
      </Box>
    </Box>
    </Slide>
  );
};

export default HomeSideBar;
