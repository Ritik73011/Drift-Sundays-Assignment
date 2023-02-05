import { Box, Typography,Slide } from "@mui/material";
import {database,ref,onValue} from '../../config/config'
import { useEffect, useState } from "react";
const HomeRightSide = () => {
  const [data,setData] = useState({});
  const starCountRef = ref(database, "Home/");
  const [video,setVideo] = useState();

  useEffect(()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setVideo(data.mainVideo);
    });
  },[])
  return (
    <Box sx={{ width: "100%" }}>
      <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box
        sx={{
          minHeight: "73vh",
          maxHeight: "73vh",
          background:
            `url('${data.mainVideoCoverImg}')`,
          backgroundSize: "cover",
        }}
      >
        {data.mainVideo?<video
          autoPlay
          loop
          muted
          preload="auto"
          style={{
            width: "100%",
            minHeight: "73vh",
            objectFit: "fill",
            maxHeight: "73vh",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>:null}
      </Box>
      </Slide>
      <Slide direction="up" in mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "18.3vh",
        }}
      >
        <Box
          sx={{
            background:
              `url('${data.bottomImg1}')`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              {data.bottomTitle1}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background:
            `url('${data.bottomImg2}')`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              {data.bottomTitle2}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background:
            `url('${data.bottomImg3}')`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              {data.bottomTitle3}
            </Typography>
          </Box>
        </Box>
      </Box>
      </Slide>
    </Box>
  );
};
export default HomeRightSide;
