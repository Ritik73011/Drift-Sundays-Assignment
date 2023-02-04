import { Box, Typography, Slide, Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Service = () => {
  return (
    <Box sx={{ textAlign: "left", padding: "40px 32px" }}>
      <Box sx={{}}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bolder", letterSpacing: "2px" }}
        >
          OUR SERVICES
        </Typography>
      </Box>
      <Slide direction="down" in mountOnEnter unmountOnExit>
        <Box sx={{ display: "flex", width: "100%", marginTop: "24px" }}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            error ipsa, ab modi neque magnam rem blanditiis, aliquid dolores ut
            temporibus incidunt voluptates sit explicabo corrupti eaque
            repellat. Voluptatum, aperiam porro explicabo fugiat blanditiis
            repellendus iure sapiente unde et architecto nostrum animi
            cupiditate quas magni.
          </Box>
        </Box>
      </Slide>

      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Box sx={{ display: "flex", width: "100%", marginTop: "24px" }}>
          <Box sx={{ maxWidth: "320px", width: "100%" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: "bolder",
                color: "darkgrey",
              }}
            >
              {"hondacivic (hetchback vi)"}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
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
                  src="https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/screen-0.jpg?alt=media&token=58d3b19f-5258-4ee8-b395-2ecdf82651ea"
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
                  200€
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
                  just Rent and drive
                </Typography>

                <Typography sx={{ marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam enim, saepe consectetur veniam facilis deserunt
                  laborum hic sed aspernatur placeat et harum! Beatae accusamus
                  eveniet aspernatur rerum a praesentium placeat, iusto vel id
                  sed aliquam. Id rerum omnis quos suscipit quibusdam, quod
                  alias. Quibusdam soluta doloremque quod. Magnam dolore
                  deleniti est nemo praesentium temporibus in perspiciatis totam
                  eum enim nihil quidem tempore fuga incidunt, porro iste libero
                  autem quia commodi.
                </Typography>
              </Box>
            </Box>

            <Box sx={{marginTop:"24px"}}>
              <Typography>Manual Transmission</Typography>
              <Box sx={{display:"flex",gap:"16px",marginTop:"16px"}}>
                    <AccessTimeIcon/>
                    <Typography>30 minutes of theory and 15 minutes of practise</Typography>
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
