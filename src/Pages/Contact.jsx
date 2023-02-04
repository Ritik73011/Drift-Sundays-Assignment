import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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
  return (
    <Box
      sx={{
        background:
          "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/drift-cars-black-and-white-nissan-8ti3r62yfoib2uxf.jpg?alt=media&token=de014d92-0840-4dd5-a300-4ca31c8394bd')",
        backgroundSize: "cover",
        color: "white",
        minHeight: "91vh",
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

        <Typography sx={{ margin: "16px 0" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          neque praesentium aperiam rerum! Temporibus, sapiente? Facere delectus
          nesciunt provident aut maiores. Voluptas autem distinctio est, fugit
          veniam voluptates neque laudantium ea ipsum fugiat sapiente at
          consequuntur quasi numquam odio aliquam enim ipsam quod asperiores vel
          dignissimos! Libero illum possimus facilis.
        </Typography>
        <Typography sx={{ paddingTop: "16px" }}>
          We work daily from 9am till 6pm.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginTop: "18px",
            alignItems: "center",
          }}
        >
          <AddIcCallIcon sx={{ color: "#ffe900" }} />
          <Typography sx={{ color: "#ffe900" }}>+919304613678</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginTop: "18px",
            alignItems: "center",
          }}
        >
          <EmailIcon sx={{ color: "#ffe900" }} />
          <Typography sx={{ color: "#ffe900" }}>
            ritikkumarsingh730@gmail.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            background: "rgba(0,0,0,0.7)",
            padding: "16px",
            marginTop: "48px",
          }}
        >
          <FacebookIcon
            fontSize="large"
            sx={{ color: "#0883e8", cursor: "pointer" }}
          />
          <InstagramIcon
            fontSize="large"
            sx={{ color: "#e83a55", cursor: "pointer" }}
          />
          <LinkedInIcon
            fontSize="large"
            sx={{ color: "#0073b1", cursor: "pointer" }}
          />
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "48px" }}
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
                />
                <TextField
                  type="number"
                  sx={{ marginTop: "24px" }}
                  fullWidth
                  label="Number"
                  id="fullWidth"
                />

                <Button
                  sx={{
                    width: "100%",
                    padding: "16px",
                    color: "black",
                    fontWeight: "bolder",
                    background: "#ffe900",
                    ":hover": { background: "green"},
                    marginTop: "16px" 
                  }}
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
