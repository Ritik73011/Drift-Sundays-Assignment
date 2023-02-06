import {Box, useMediaQuery} from '@mui/material'
import HomeRightSide from '../components/HomeRightSide/HomeRightSide'
import HomeSideBar from '../components/HomeSideBar/HomeSideBar'

const Home = () => {
  const media = useMediaQuery("(max-width:768px)");
  return (
    <Box>
        <Box sx={{display:media?"grid":"flex",marginTop:media?"51px":"65px"}}>
          <HomeSideBar/>
          <HomeRightSide/>
        </Box>
    </Box>
  )
}

export default Home