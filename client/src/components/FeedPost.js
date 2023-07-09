import React from 'react'
import "../styles/FeedPost.css"
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
const FeedPost = ({props}) => {
   
    
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:'50rem',
        lineHeight: '40px',
      }));
      const lightTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <div className="feedpost">
        
        

        <div class="blog_post">
  <div class="img_pod">
    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt=""/>
  </div>
 
 
  
  <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'flex',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 1,
              }}
            >
              
                <Item  elevation={4}>
         
                <div class="container_copy">
                    
                <div class="edits"><i class='bx bxs-bookmark-star'></i>
  <i class='bx bxs-edit' ></i></div>
  <div className="postcredits">
  <p>By: {props.createdby}</p>
    <p>Posted : {new Date(props.createdAt).toDateString()}    <a className="directlink" href={`${props.link}`} target="_blank" rel="noreferrer"><i class='bx bx-link-external'></i></a></p>
    
  </div>
   <center>
    <div className="postdesc">{props.description}</div></center>
    <div >
    {
        props.categories.map((e)=>{
            return <Chip label={e} className="categories"/>
        })
    }
</div>
   
  </div>
  <div className="likes">
  <Badge color="secondary" badgeContent={props.views>99?"99+": props.views} anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
  <i class='bx bx-bolt-circle'></i>
  </Badge>
  <Badge color="secondary" badgeContent={props.likes>99?"99+": props.likes}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  >
  
  <i class='bx bxs-like'></i>
  </Badge>
  </div>

                </Item>
            
            </Box>
          </ThemeProvider>
</div>
      
    </div>
  )
}

export default FeedPost
