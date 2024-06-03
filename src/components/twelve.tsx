import { Typography } from '@mui/material'
import React from 'react'

const Twelve = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <div>
      <Typography>Our top cities</Typography>
    </div>
    <div style={{display:"flex",flexDirection:"row",gap:"16.3vw"}}>
    <div>
    <Typography style={{width:"7.99vw",height:"2.4vh"}}>San Francisco</Typography>
    <Typography>Miami</Typography>
    <Typography>San Diego</Typography>
    <Typography>East Bay</Typography>
    <Typography>Long Beach</Typography>
    </div>
    <div>
    <Typography style={{width:"7.99vw",height:"2.4vh"}}>Los Angeles</Typography>
    <Typography>Washington DC</Typography>
    <Typography>Seattle</Typography>
    <Typography>Portland</Typography>
    <Typography>Nashville</Typography>
    </div>
    <div>
    <Typography style={{width:"7.85vw",height:"2.4vh"}}>New York City</Typography>
    <Typography>Orange County</Typography>
    <Typography>Atlanta</Typography>
    <Typography>Charlotte</Typography>
    <Typography>Denver</Typography>
    </div>
    <div>
    <Typography style={{width:"7.71vw",height:"2.4vh"}}>Chicago</Typography>
    <Typography>Phoenix</Typography>
    <Typography>Las Vegas</Typography>
    <Typography>Sacramento</Typography>
    <Typography>Oklahoma City</Typography>
    </div>
    <div>
    <Typography style={{width:"7.71vw",height:"2.4vh"}}>Columbus</Typography>
    <Typography>New Mexico</Typography>
    <Typography>Albuquerque</Typography>
    <Typography>Sacramento</Typography>
    <Typography>New Orleans</Typography>
    </div>
    </div>
    </div>
  )
}

export default Twelve
