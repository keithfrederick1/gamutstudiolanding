import React from "react"
import Slider from "react-slick"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Slower speed for a continuous scroll effect
    slidesToShow: 4, // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    cssEase: "linear", // Linear easing for smooth, constant speed
    pauseOnHover: false, // Keep moving even on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='LATEST NEWS & ARTICLES' />
          </div>
          <Slider {...settings} className='brand-content py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Brand
