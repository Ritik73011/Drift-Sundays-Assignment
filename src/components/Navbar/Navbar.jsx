import logo from "../../assests/logo.png";
import { Box, ListItemButton, Typography } from "@mui/material";
import "./Navbar.css";
import ShortTextIcon from "@mui/icons-material/ShortText";
const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          maxWidth: "320px",
          width: "100%",
          display: "flex",
          background: "#070707",
          justifyContent: "space-around",
          padding: "12px 8px",
        }}
      >
        <img src={logo} alt="logo" style={{ maxWidth: "150px" }} />
        <ShortTextIcon sx={{ color: "white",margin:"auto 0" }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <ListItemButton sx={{color:"#5e5e5e"}}>Home</ListItemButton>
          <ListItemButton sx={{color:"#5e5e5e"}}>Service</ListItemButton>
          <ListItemButton sx={{color:"#5e5e5e"}}>Contact</ListItemButton>
          <ListItemButton sx={{color:"#5e5e5e"}}>Admin</ListItemButton>
        </Box>
      </Box>

      <Box sx={{maxWidth:"60px",width:"100%",display:"grid"}}>
            <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"bolder",textDecoration:"underline",margin:"auto 10px",paddingRight:"16px"}}>ENG</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
