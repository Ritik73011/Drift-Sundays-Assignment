import {Box} from '@mui/material'
import HomeRightSide from '../components/HomeRightSide/HomeRightSide'
import HomeSideBar from '../components/HomeSideBar/HomeSideBar'
const Home = () => {
  return (
    <Box>
        <Box sx={{display:"flex"}}>
          <HomeSideBar/>
          <HomeRightSide/>
        </Box>
    </Box>
  )
}

export default Home