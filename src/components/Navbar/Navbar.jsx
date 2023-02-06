import logo from "../../assests/logo.png";
import {
  Box,
  ListItemButton,
  Typography,
  useMediaQuery,
  Drawer,
  Button,
} from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import ShortTextIcon from "@mui/icons-material/ShortText";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const media = useMediaQuery("(max-width:768px)");
  const homeClick = () => {
    navigate("/");
    setState(false)
  };
  const serviceClick = () => {
    navigate("/service");
    setState(false)
  };
  const contactClick = () => {
    navigate("/contact");
    setState(false)
  };
  const adminClick = () => {
    navigate("/admin-dashboard");
    setState(false)
  };

  const openDrawer = () => {
    setState(true);
  };
  return (
    <Box sx={{ display: "flex", position: "fixed",left:"0",right:"0",top:"0",zIndex:"10",background:"#070707",color:"white" }}>
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
        <img src={logo} alt="logo" style={{ maxWidth: media?"100px":"150px" }} />
        <ShortTextIcon sx={{ color: "white", margin: "auto 0",visibility:media?"hidden":"visible" }} />
      </Box>
      <Box
        sx={{
          display: media ? "none" : "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <ListItemButton onClick={homeClick} sx={{ color: "#c6c2c2" }}>
            Home
          </ListItemButton>
          <ListItemButton onClick={serviceClick} sx={{ color: "#c6c2c2" }}>
            Service
          </ListItemButton>
          <ListItemButton onClick={contactClick} sx={{ color: "#c6c2c2" }}>
            Contact
          </ListItemButton>
          <ListItemButton onClick={adminClick} sx={{ color: "#c6c2c2" }}>
            Admin
          </ListItemButton>
        </Box>
      </Box>

      <Box sx={{ maxWidth: "60px", width: "100%", display: "grid" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "14px",
            fontWeight: "bolder",
            textDecoration: "underline",
            margin: "auto 10px",
            paddingRight: "16px",
            display: media ? "none" : "block",
          }}
        >
          ENG
        </Typography>
        <MenuIcon
          onClick={openDrawer}
          sx={{
            display: media ? "block" : "none",
            alignItems: "center",
            margin: "auto 0",
            position: "absolute",
            right: "8px",
            top: "15px",
            cursor: "pointer",
            color:"white"
          }}
        />
      </Box>
      <Box>
        <Fragment>
          <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
            <Box sx={{ width: "200px" }}>
              <Button
                onClick={homeClick}
                sx={{
                  width: "100%",
                  marginTop:"8px"
                }}
              >
                home
              </Button>
              <Button
                onClick={serviceClick}
                sx={{
                  width: "100%",
                  marginTop:"8px"
                }}
              >
                Service
              </Button>
              <Button
                onClick={contactClick}
                sx={{
                  width: "100%",
                  marginTop:"8px"
                }}
              >
                Contact
              </Button>
              <Button
                onClick={adminClick}
                sx={{
                  width: "100%",
                  marginTop:"8px"
                }}
              >
                Admin
              </Button>
            </Box>
          </Drawer>
        </Fragment>
      </Box>
    </Box>
  );
};

export default Navbar;
