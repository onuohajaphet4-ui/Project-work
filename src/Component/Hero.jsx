import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination , Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Hero.css'
import hero from '../assets/pro.jpg'
import about from '../assets/about.jpg'
import contact from '../assets/contact.jpg'
import product from '../assets/product.jpg'
import testil from '../assets/testimonial.jpg'
import testi from '../assets/testi.jpg'

import {Link} from 'react-router-dom'
const Hero = () => {
    const slides = [
        {
            image:hero ,
            title:'Jp Gadget introduce the 2025 Smart innovation line. Building the future, one Gadget at a time ',
            desc: 'At Gadget Hero, we’re redefining technology through innovation, quality, and style. Our mission is to make smart gadgets and accessories accessible to everyone — empowering people to live, work, and connect in new ways. Whether you’re a gamer, creator, or professional, Gadget Hero brings you the latest tech built to inspire and keep you ahead in a world driven by innovation.',
            

        },
         {
            image:about ,
            title:'Empowering Africa Through Techonology ',
            desc: 'At Gadget Hero, we’re a team of young innovators passionate about creating access to affordable, high-quality tech. From smartphones to accessories, our goal is to make technology simple, stylish, and accessible to everyone, everywhere.',
            button: 'Learn more About Us',
            link : '/about',

        },
         
         {
            image:product,
            title:'Innovative Products for Every Lifestyle, Discover the power of smart living',
            desc: 'At Gadget Hero, we offer a wide range of innovative products designed to fit every lifestyle. From cutting-edge smartphones and smartwatches to essential accessories, each item is carefully selected for quality, performance, and style. Our products are built to make everyday life smarter, faster, and more connected — helping you experience technology at its best.s',
            button: 'Learn more',
            link : '/product',

        },
         {
            image: testi ,
            title:' Real Stories, Real Experiences. Hear it from Gadget hero community',
            desc: 'At Gadget Hero, our customers are at the heart of everything we do. From first-time buyers to long-time tech enthusiasts, their stories inspire us to keep delivering quality, innovation, and reliable service. Here’s what people love about their experience with Gadget Hero.',
            button: 'Learn more',
            link : '/testimonial',

        },
        {
            image:contact ,
            title:' Lets Stay Connected and Build the Future Together ',
            desc: 'Stay connected with Gadget Hero and be part of a community that values innovation and growth. We’re always open to conversations, collaborations, and feedback that help us create better experiences for our customers. Let’s keep building the future of technology together.',
            button: 'Learn more',
            link : '/contact',

        },
        {
            image: testil ,
            title:'Celebrating Our Valued Customers ',
            desc: 'At Gadget Hero, we believe our customers are the real heroes behind our success. This page is dedicated to everyone who has supported and trusted our brand. As a token of our appreciation, we’re planning special gifts and rewards to thank you for your loyalty and continuous patronage. Your support inspires us to keep innovating and delivering the best in technology.',
            button: 'Learn more',
            link : '/log',

        },
    ]
  return (
    <div className='slider-container'>
       <Swiper 
       modules={[Navigation, Pagination , Autoplay]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay:10000}}
        loop

       
        >
            {slides.map((slide, i ) => (
               <SwiperSlide key={i}  >
                 <div className="slide">
                    <img src={slide.image} alt=""  className='slide-image'/>

                    <div className="slide-text">
                        <h1>{slide.title}</h1>
                        <hr style={{color:'black', padding: '1px', backgroundColor:'black', marginRight:'50%'}} />
                        <p>{slide.desc}</p>
                       <Link to={slide.link}> <button>{slide.button}</button></Link>
                    </div>
                 </div>
                 </SwiperSlide> 
            ))}



       </Swiper>
    </div>
  )
}

export default Hero
