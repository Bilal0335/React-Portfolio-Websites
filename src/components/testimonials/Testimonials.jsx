import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    avatar: AVATAR1,
    name: "Ernest Archiver",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vel esse sit accusamus corporis quo magnam aut totam voluptatem porro, quam, quibusdam nisi omnis eveniet! Laudantium ducimus cupiditate eligendi error."
  },
  {
    avatar: AVATAR2,
    name: "Sarah Johnson",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vel esse sit accusamus corporis quo magnam aut totam voluptatem porro, quam, quibusdam nisi omnis eveniet! Laudantium ducimus cupiditate eligendi error."
  },
  {
    avatar: AVATAR3,
    name: "Michael Smith",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vel esse sit accusamus corporis quo magnam aut totam voluptatem porro, quam, quibusdam nisi omnis eveniet! Laudantium ducimus cupiditate eligendi error."
  },
  {
    avatar: AVATAR4,
    name: "Emily Davis",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vel esse sit accusamus corporis quo magnam aut totam voluptatem porro, quam, quibusdam nisi omnis eveniet! Laudantium ducimus cupiditate eligendi error."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews For Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonials">
            <div className="client_avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <h5 className="client_name">{testimonial.name}</h5>
            <small className="client_review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
