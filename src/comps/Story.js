import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import brands from '../jsons/brands.json';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }


const Story = () => {

    console.log(brands);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 9,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="w-full">
        <div className="w-1200 mx-auto mt-8">
            <Slider {...settings}>
                {brands.map(b => { 
                    return (
                        <div className="flex flex-col">
                            <img src={b.img} width="72" height="72" className="objext-fit block mx-auto mb-2" style={{borderRadius:"50%"}}/>
                            <p className="text-center">{b.name}</p>
                        </div>
                    )
                })}     
            </Slider>   
        </div>
        </div>
    )
}

export default Story
