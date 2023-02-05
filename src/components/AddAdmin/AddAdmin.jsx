import { Box, Button, TextField, Typography } from "@mui/material";
import { database, ref, onValue, set } from "../../config/config";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [data, setData] = useState({});
  const Navi = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const [admin, setAdmin] = useState([]);
  const starCountRef = ref(database, "admin/");

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      //const data = snapshot.val();
      snapshot.forEach(function (childNodes) {
        admin.push(childNodes.val().email);
      });
    });
  }, []);

  const handleClick = () => {
    if (admin.includes(data.email)) {
      alert("admin is already exists !");
    } else if (data.password === "" || data.password === "  " || data.email==" " || data.email== "  ") {
      alert("fields can't  empty!");
    } else {
        const str = new Date().getTime().toString();
        set(ref(database, "admin/" + str), {
            email: data.email,
            password: data.password,
        });
        alert("admin added, now you can login with this credentials...");
    }
  };
  return (
    <Box
      sx={{
        padding: "24px",
        marginTop: "24px",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          padding: "16px",
          boxShadow: "0px 0px 8px darkgrey",
          position: "fixed",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
          ADD ANOTHER ADMIN
        </Typography>
        <TextField
          sx={{ marginTop: "24px", maxWidth: "360px", width: "100%" }}
          label="Email"
          onChange={handleChange}
          name="email"
          type="email"
        />
        <TextField
          sx={{ marginTop: "24px", maxWidth: "360px", width: "100%" }}
          label="Password"
          onChange={handleChange}
          name="password"
          type="password"
        />
        <Button
          sx={{
            maxWidth: "360px",
            width: "100%",
            padding: "16px",
            color: "black",
            fontWeight: "bolder",
            background: "#ffe900",
            ":hover": { background: "green" },
            marginTop: "24px",
          }}
          onClick={handleClick}
        >
          ADD
        </Button>
      </Box>
    </Box>
  );
};

export default AddAdmin;
