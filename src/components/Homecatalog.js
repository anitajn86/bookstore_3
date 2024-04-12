import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './Homecatalog.css'



export default function TitlebarImageList() {
  return (
    <div className='home'>
      <div className='catalog1'>
        <ImageList sx={{ width: 1500, height: 850 }}>
          <ImageListItem key="Subheader" cols={5}>
            
            <ListSubheader component="div"style={{backgroundColor:'black', color: 'white', fontSize: '35px', fontFamily: 'Verdana'}}  >
              Dramaaaa
              </ListSubheader>
            
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      
  </div>
  );
}

const itemData = [
  {
    id:0,
    img: 'https://th.bing.com/th?id=OIP.1tcYnW-N5yRzMhQ_gTCl9wAAAA&w=202&h=309&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    title: 'HOMEGOING',
    author: 'Yaa Gyasi',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id:1,
    img: 'https://th.bing.com/th?id=OIP.AW-AhStUEwgG6D2cb7MpvAHaLW&w=202&h=309&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    title: 'THINGS FALL APART',
    author: 'Chinua Achebe',
  },
  {
    id:2,
    img: 'https://th.bing.com/th?id=OIP.KnJG5cc68IRlf7agSH6ILgHaLM&w=203&h=307&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' ,
    title: 'THE GILDED ONES',
    author: 'Namina Forna',
  },
  {
    id:3,
    img: 'https://th.bing.com/th?id=OIP.2LZBZhCo9yJBFevU5H1SkAHaKZ&w=211&h=296&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    title: 'OUT OF AFRICA',
    author: 'Isak Dinesen',
    cols: 2,
  },
  {
    id:4,
    img: 'https://th.bing.com/th/id/OIP.yDdyK2qNp4RMCmcS_tgqhAHaLj?w=187&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'DESCENDANTS OF THE FIRST',
    author: 'Reni K Amayo',
    cols: 2,
  },
  {
    id:5,
    img: 'https://th.bing.com/th/id/OIP.OAnvtIGBFOMI4Ev_4Z0PwgHaLp?w=187&h=294&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'HUNGER EATS A MAN',
    author: 'Ikosinathi Sithole',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id:6,
    img: 'https://th.bing.com/th/id/OIP.bK3AmUZf7t-y2nbLnac7YwAAAA?w=187&h=302&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'THE EQUATORIAL ASSIGNMENT',
    author: 'David G Maillu',
  },
  {
    id:7,
    img: 'https://th.bing.com/th/id/OIP.eXmYs16_Rko8BlYL5pueBAAAAA?w=187&h=259&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'AFRICAN MELODY',
    author: 'Bayo Adebowale',
  },
  {
    id:8,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    id:9,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    id:10,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    id:11,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];