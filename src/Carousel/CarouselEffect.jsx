import React from 'react'
import {img} from './img/data';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'

const CarouselEffect = () => {
  return (
    <div>
 <Carousel
     autoPlay ={true}
     infiniteLoop	={true}
     showIndicators ={false}
     showThumbs ={false}
     >
    {
    img.map((imageItemLink) => {
            return <img src={imageItemLink} />
          
        })

    }

 </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
