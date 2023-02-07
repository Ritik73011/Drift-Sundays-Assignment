import { Box, Button, TextField, Typography } from "@mui/material";
import { database, ref, set } from "../../config/config";
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
const Popup = ({handleClose}) => {
  const [inputData, setInputData] = useState({
    name:"",
    email:"",
    number:""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };
  const handleClick = () => {
    if (inputData.name === "" || inputData.number === "  ") {
      alert("name is empty!");
    } else if (
      inputData.number === "" ||
      inputData.number === "  " ||
      inputData.number.length < 10
    ) {
      alert("number is wrong!");
    } else {
      set(ref(database, "applications/" + inputData.number), {
        name: inputData.name,
        email:inputData.email,
        number: inputData.number,
      });
      alert("thanku😊 for applying...");
      handleClose();
    }
  };

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        SUBMIT APPLICATION
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          sx={{ marginTop: "16px" }}
          fullWidth
          label="Name"
          id="fullWidth"
          onChange={handleChange}
          name="name"
        />
        <TextField
          sx={{ marginTop: "16px" }}
          fullWidth
          label="Email (optional)"
          id="fullWidth"
          onChange={handleChange}
          name="email"
        />
        <TextField
          type="number"
          sx={{ marginTop: "16px" }}
          fullWidth
          label="Number"
          id="fullWidth"
          onChange={handleChange}
          name="number"
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
  );
};

export default Popup;
