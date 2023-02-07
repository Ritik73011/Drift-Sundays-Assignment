import { Box, Button, Slide, TextField, Typography, useMediaQuery } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Modal from "@mui/material/Modal";

import { database, ref, onValue,set } from "../config/config";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState({});
  const [social, setSocial] = useState({});
  const starCountRef = ref(database, "Contact/");
  const socialRef = ref(database, "SocialLinks/");
  const media = useMediaQuery("(max-width:768px)");
  
  const faceClick = () => {
    window.open(social.facebook, "_blank");
  };
  const instaClick = () => {
    window.open(social.instagram, "_blank");
  };
  const linkClick = () => {
    window.open(social.linkedin, "_blank");
  };

  const [inputData,setInputData] = useState({});
  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInputData({...inputData,[name]:value});
  }
  const handleClick = ()=>{
    if(inputData.name==="" || inputData.number==="  "){
     alert("name is empty!");
    }
    else if(inputData.number===""||inputData.number==="  "|| inputData.number.length<10){
      alert("number is wrong!")
    }
    else{
      set(ref(database, 'users/'+inputData.number), {
        name: inputData.name,
        number: inputData.number,
      });
      alert("thanku😊 we will contact you soon...")
      handleClose();
    }
  }

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
    <Box
      sx={{
        background: `url('${data.cover}')`,
        backgroundSize: "cover",
        color: "white",
        minHeight: "91vh",
        marginTop:media?"51px":"65px"
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          padding: "40px 32px",
          background: "rgba(0, 0, 0, 0.5)",
          minHeight: "79.5vh",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bolder", letterSpacing: "2px" }}
        >
          CONTACTS
        </Typography>
        <Slide direction="down" in mountOnEnter unmountOnExit>
        <Typography sx={{ margin: "16px 0" }}>{data.aboutCompany}</Typography>
        </Slide>
        <Typography sx={{ paddingTop: "16px" }}>
          We work daily from 9am till 6pm.
        </Typography>
        <Slide direction="up" in mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginTop: "18px",
            alignItems: "center",
          }}
        >
          <AddIcCallIcon sx={{ color: "#ffe900" }} />
          <Typography sx={{ color: "#ffe900" }}>+91{data.phoneNum}</Typography>
        </Box>
        </Slide>
        <Slide direction="up" in mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginTop: "18px",
            alignItems: "center",
          }}
        >
          <EmailIcon sx={{ color: "#ffe900" }} />
          <Typography sx={{ color: "#ffe900" }}>{data.email}</Typography>
        </Box>
            </Slide>
            <Slide direction="left" in mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "24px",
            marginTop: "24px",
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
        <Box
          sx={{ display: "flex", justifyContent: "start", marginTop: "48px" }}
        >
          <Button
            sx={{
              padding: "12px",
              background: "#ffe900",
              color: "black",
              fontWeight: "bolder",
              ":hover": { background: "aqua" },
            }}
            onClick={handleOpen}
          >
            CONTACT US
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CONTACT US
              </Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  sx={{ marginTop: "24px" }}
                  fullWidth
                  label="Name"
                  id="fullWidth"
                  onChange={handleChange}
                  name='name'
                />
                <TextField
                  type="number"
                  sx={{ marginTop: "24px" }}
                  fullWidth
                  label="Number"
                  id="fullWidth"
                  onChange={handleChange}
                  name='number'
                />

                <Button
                  sx={{
                    width: "100%",
                    padding: "16px",
                    color: "black",
                    fontWeight: "bolder",
                    background: "#ffe900",
                    ":hover": { background: "green" },
                    marginTop: "16px",
                  }}
                  onClick={handleClick}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
