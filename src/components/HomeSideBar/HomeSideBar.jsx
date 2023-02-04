import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const HomeSideBar = () => {
  return (
    <Box
      sx={{
        maxWidth: "336px",
        width: "100%",
        background:
          "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/P90410286-the-new-bmw-2-series-gran-coup-black-shadow-edition-12-2020-2250px.jpg?alt=media&token=90f8b480-3c3c-4126-808f-35fde5f99c26')",
        backgroundSize: "cover",
        textAlign: "left",
        minHeight:"91vh",
        position :"relative"
      }}
    >
      <Box sx={{ background: "rgba(0, 0, 0, 0.5)", padding: "24px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bolder",
            fonsize: "40px",
            marginBottom: "24px",
          }}
        >
          CARTAGENA DRIFT
          <br /> SCHOOL
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
          The first professional drifting school in Spain
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
          We have everything to teach you and do everything to give you a taste
          of drifting.
        </Typography>
        <Typography sx={{ color: "white", marginTop: "18px" }}>
          Cartagena's unique track combines all these possiblities.
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
              100+
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Broken engines
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              2500+
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Burnt wheels
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              &gt;200
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Took the podium
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#ffe900" }}>
              100%
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Satisfied customers
            </Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"24px",marginBottom:"7px"}}>
            <FacebookIcon  fontSize="large" sx={{color:"#0883e8",cursor:"pointer"}}/>
            <InstagramIcon  fontSize="large" sx={{color:"#e83a55",cursor:"pointer"}}/>
            <LinkedInIcon  fontSize="large" sx={{color:"#0073b1",cursor:"pointer"}}/>
        </Box>
      </Box>
      <Box sx={{ width: "100%", background: "rgba(0, 0, 0, 0.5)"}}>
        <Button
          sx={{
            backgroundColor: "#ffe900",
            color: "#333",
            width: "100%",
            borderRadius: "0",
            textTransform: "none",
            fontSize: "13px",
            padding: "16px",
            ":hover":{backgroundColor:"#ffe400"},
          }}
        >
          Submit your application
        </Button>
      </Box>
    </Box>
  );
};

export default HomeSideBar;
