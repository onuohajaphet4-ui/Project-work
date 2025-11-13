import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./Product.css";

export default function TemplateGridSwiper() {
  // 20 example cards
  const cards = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: Template `${i + 1}`,
    price: "$10.8/mo",
  }));

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Templates</h2>

      <Swiper
        modules={[Navigation, Pagination, Grid]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        grid={{
          rows: 2, // 👈 This makes it 2 rows per swipe
          fill: "row",
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 5,
            grid: { rows: 2 },
          },
          1600: {
            slidesPerView: 6,
            grid: { rows: 3 }, // 👈 More rows on very large screen
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <div className="card-inner">
                <div className="card-thumb">{/* image placeholder */}</div>
                <h4>{card.title}</h4>
                <p>{card.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}