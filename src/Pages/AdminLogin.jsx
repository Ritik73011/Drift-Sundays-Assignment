import { Box, Button, TextField, Typography } from "@mui/material";
import { database, ref, onValue, set } from "../config/config";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
const AdminLogin = () => {
  const [data, setData] = useState({});
  const { updateLogin } = useContext(AdminContext);
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
        admin.push({
          email: childNodes.val().email,
          pass: childNodes.val().password,
        });
      });
    });
  }, []);

  const handleClick = () => {
    if (data.email === "" || data.email === "  ") {
      alert("email is empty!");
    } else if (data.password === "" || data.password === "  ") {
      alert("password is empty!");
    } else {
      const user = admin.filter((ele) => {
        return ele.email === data.email;
      });

      if (user.length === 0) {
        alert("admin not exists...");
      } else if (user[0].email == data.email && user[0].pass == data.password) {
        updateLogin(true);
        alert("thanku😊 you for login...");
        Navi("/admin-dashboard");
      } else {
        alert("wrong information...");
        /*const str = new Date().getTime().toString();
          set(ref(database, "admin/" + str), {
            email: data.email,
            password: data.password,
          });*/
      }
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
          ADMIN LOGIN
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
          SUBMIT
        </Button>
        <Typography sx={{ textAlign: "center", marginTop: "8px" }}>
          Default Admin Email: "ritik@gmail.com"
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Default Admin Password: "2001"
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminLogin;
