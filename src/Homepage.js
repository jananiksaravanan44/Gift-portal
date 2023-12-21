import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import './homepage.css';
export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: 'scroll',backgroundColor:"darkturquoise"}}>
      <Navbar/>
      <br/>
      <Form/>
      <br/>
      <ImageList variant="masonry" cols={5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      <Footer/>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-59304,resizemode-75,msid-97758913/top-trending-products/gifts/12-customised-gifts-for-valentines-day-under-rs-3000/image1-1-.jpg',
    title: 'Photo Frames',
    author: 'Gift Hampers',
  },
  {
    img: 'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/73528_marble-crunch-cake.jpeg',
    title: 'Cakes',
    author: 'Cakes',
  },
  {
    img: 'https://www.apnagift.in/wp-content/uploads/2021/10/Apnagift.png',
    title: 'PhotFrames',
    author: 'Photo Frames',
  },
  
  {
    img: 'https://www.fnp.com/assets/images/custom/mob-personalised-micro-2021/By-Ocassion/Birthday.jpg',
    title: 'gifts',
    author: 'Customised Gifts',
  },
  {
    img: 'https://blacktulipflowers.in/wp-content/uploads/2022/10/admirable_handbouquet_of_mix_flowers.png',
    title: 'Bouquet',
    author: 'Flowers',
  },
  {
    img: 'https://blingvine.com/cdn/shop/products/bluebell-pendant-set-necklace-sets-blingvine-791436_1000x.jpg?v=1636527921',
    title: 'Jewellery',
    author: 'Jewellery',
  },
  {
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61TXaEBsH0L._AC_UF1000,1000_QL80_.jpg',
    title: 'Chocolates',
    author: 'Chocolates',
  },
  {
    img: 'https://shop.globalbees.com/cdn/shop/products/61br0MCjvWL.jpg?v=1696925101',
    title: 'homedecor',
    author: 'Home Decor',
  },
  {
    img: 'https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/a1Lgz5Irmb.jpg',
    title: 'Gadgets',
    author: 'Gadgets',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1e4a_i2uEFlSPVNm65aLuc3unIWBq6cnng&usqp=CAU',
    title: 'Plants',
    author: 'Plants',
  },
];
