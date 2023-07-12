import React from 'react'
import "../styles/Map.css"
import ExploreIcon from '@mui/icons-material/Explore';
import PublicIcon from '@mui/icons-material/Public';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



// My Map =https://www.google.com/maps/d/edit?hl=en&mid=12gPS0EMhvqo2X2ukr1AKF60FUYkRR1M&ll=26.07476437191427%2C82.04009016584531&z=6
const Map = () => {
  
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));
  return (
    <div className="map">
        <div className="earth">
        <div>

        </div>

        
        </div>

        <div className="orbit">
           <div className="moon">
           <i class='bx bx-flashing'>
           <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Jump into Google Earth</Typography>
           
          </React.Fragment>
        }
      >
         <a href="https://earth.google.com/web/@19.52586889,82.6649728,638.83325832a,701741.84332475d,35y,48.72510898h,60.00061385t,360r/data=MigKJgokCiAxMmdQUzBFTWh2cW8yWDJ1a3IxQUtGNjBGVVlrUlIxTSAC" target="_blank" rel="noreferrer"><ExploreIcon /></a>
        
      </HtmlTooltip>
           
           </i>
               
           </div>
           <div className="moons">
           <i class='bx bx-flashing'>
           <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Explore Cross Origin With Google Map</Typography>
           
          </React.Fragment>
        }
      >
         <a href="https://www.google.com/maps/d/embed?mid=12gPS0EMhvqo2X2ukr1AKF60FUYkRR1M&ehbc=2E312F"  target="_blank" rel="noreferrer"><PublicIcon /></a>
        
      </HtmlTooltip>
           </i>
           </div>
        </div>
     





         </div>
  )
}

export default Map
