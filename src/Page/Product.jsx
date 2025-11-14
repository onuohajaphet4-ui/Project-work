import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./Product.css";
import img from '../assets/aboutus.jpg'
export default function TemplateGridSwiper() {
  // 20 example cards
  const cards = [
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },

    {
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },{
      id: 1,
    title : 'kkkkkk loadge',
    price: '10$',
    img: img
    },
  ]
  ;

  return (
    <div className="containerr">
      {/* <h2 style={{ textAlign: "center" }}>Templates</h2> */}


       <Swiper
  modules={[Navigation, Pagination, Grid]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={3} // 3 columns
  grid={{
    rows: 7, // 10 rows per swipe
    fill: "row",
  }}
  style={{
    height: "700px", // 👈 increase height to fit 10 rows properly
    paddingBottom: "10px",
    margin:'0 auto',
    width:'80%'
  }}
>
  {cards.map((card) => (
    <SwiperSlide key={card.id}>
      <div className="carddd">
        <img src={card.img} alt={card.title} />
        <h4>{card.title}</h4>
        <p>{card.price}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}