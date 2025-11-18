// import React from 'react'
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Product.css'
import {motion} from 'framer-motion'
import Fakenav from '../Component/Fakenav'
 export const gadgets = [
    
    {
      id:103,
    title : 'Wired Oldbay Headphone',
    price: '90$',
    img: 'https://cdn.pixabay.com/photo/2017/07/31/11/45/headphones-2557583_640.jpg'
    },
    {
      id:106,
    title : 'Meta5 Ai Glasses',
    price: '50$',
    img: 'https://cdn.pixabay.com/photo/2017/08/06/14/31/eyeglasses-2593033_640.jpg'
    },
    {
      id: 114,
    title : '2025 White Qape Iphone Watch',
    price: '400$',
    img: 'https://cdn.pixabay.com/photo/2015/11/03/18/40/iphone-1021289_640.jpg'
    },{
      id: 119,
    title : 'Blande Q Earpod ',
    price: '90$',
    img: 'https://cdn.pixabay.com/photo/2023/05/07/10/20/airpods-7976095_1280.jpg'
    },
    {
      id: 121,
    title : 'Oraimo Headphone',
    price: '120$',
    img: 'https://cdn.pixabay.com/photo/2020/12/17/15/45/woman-5839826_640.jpg'
    },{
      id: 122,
    title : 'Vmode Vintage Headphone',
    price: '10$',
    img: 'https://cdn.pixabay.com/photo/2019/02/18/12/37/headphone-4004450_640.jpg'
    },{
      id: 123,
    title : 'Earpiece',
    price: '10$',
    img: 'https://cdn.pixabay.com/photo/2014/10/08/09/46/earpod-479679_640.jpg'
    },{
      id: 224,
    title : 'Digi Clock wise',
    price: '100$',
    img: 'https://cdn.pixabay.com/photo/2023/11/16/10/26/casio-8392121_640.jpg'
    },{
      id: 125,
    title : 'Sony A7 lll Mirrorless Camera',
    price: '320$',
    img: 'https://cdn.pixabay.com/photo/2012/04/13/17/00/camera-32871_640.png'
    },
    {
      id: 126,
    title : 'Linex Ox Gamplay',
    price: '190$',
    img: 'https://cdn.pixabay.com/photo/2013/07/13/01/19/palm-155529_640.png'
    },{
      id: 127,
    title : 'Iphone P EarPOD',
    price: '200$',
    img: 'https://cdn.pixabay.com/photo/2022/02/10/10/18/earphones-7005009_640.jpg'
    },{
      id: 129 ,
    title : 'Goplay WireLess Sport Headpone',
    price: '70$',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcE5yqX9o3qNUxqHtP2CggORTiqSjrw1eQw&s'
    },{
      id: 130,
    title : 'Red Chrome Heart Headphone',
    price: '100$',
    img: 'https://cdn.pixabay.com/photo/2016/05/06/13/40/headphones-1375893_640.jpg'
    },{
      id: 131,
    title : 'Digi Camera Latitude',
    price: '700$',
    img: 'https://cdn.pixabay.com/photo/2020/02/11/19/56/laptop-4840790_640.jpg'
    },
    {
      id: 133,
    title : 'New Pes5 pro',
    price: '700$',
    img: 'data:image/jpeg;base64,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'
    },{
      id: 137,
    title : 'Iphone Wristwatch 2023 Edition',
    price: '203$',
    img: 'https://cdn.pixabay.com/photo/2017/06/01/00/53/apple-2362149_640.jpg'
    },

    {
      id: 140,
    title : 'Cooosu White Earpiece',
    price: '30$',
    img: 'https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422_640.jpg'
    },{
      id:141 ,
    title : 'Song S2 iii Camera',
    price: '141$',
    img: 'https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045_640.jpg'
    },{
      id:142 ,
    title : 'Chrome Heart Digi Wristwatch',
    price: '309$',
    img: 'https://cdn.pixabay.com/photo/2015/05/07/13/43/watch-756487_640.jpg'
    },{
      id: 143,
    title : 'Samsung Sphere Hd Camera',
    price: '700$',
    img: 'https://cdn.pixabay.com/photo/2018/03/28/12/56/camera-3269206_640.jpg'
    },{
      id:144 ,
    title : 'Vr Templete Gameplay',
    price: '444$',
    img: 'https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_640.jpg'
    },{
      id: 145,
    title : 'AXpis QQpp',
    price: '1001$',
    img: 'https://cdn.pixabay.com/photo/2013/12/14/07/29/lid-228366_640.jpg'
    },{
      id: 146,
    title : 'Xaoimi Wired Headphone',
    price: '90$',
    img: 'https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_640.jpg'
    },{
      id: 147,
    title : ' Pixer CVK Camera',
    price: '200$',
    img: 'https://cdn.pixabay.com/photo/2020/05/04/11/15/gopro-5128732_640.jpg'
    },{
      id: 147,
    title : 'Jbl Loud Speaker',
    price: '230$',
    img: 'https://cdn.pixabay.com/photo/2019/10/21/11/35/camera-4565859_640.jpg'
    }
    ,{
      id:148 ,
    title : 'Samsung Lens Pixer Camera',
    price: '270$',
    img: 'https://cdn.pixabay.com/photo/2014/02/22/19/52/display-272267_640.jpg'
    },
  ]


const Product = () => {
  const [search, setSearch] = useState("");
   const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = gadgets.filter((b) =>
    b.title.toLowerCase().includes(search)
  );
  return (
    <div className="vin">

      

      

      <h1 className="vin-h1">
       ZYNOX  STORE Product Store  
      </h1>

      <p className="vin-p">
        Discover high-quality digital products developed to help individuals and businesses perform at their best.
        With clean design, powerful features, 
        and consistent performance, our products deliver the reliability you need to grow and succeed.
      </p>



         <Fakenav/>

       <motion.div
                           initial={{ opacity: 0, y: 30, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
        >
    

      <input
        className="bran-input"
        type="text"
        placeholder="Search Branch"
        value={search}
        onChange={handleSearch}
      />

      <div className="vin-for">

      {filteredCards.slice().map((card, index) => (
        <div key={index} className="vin-card"> 
          
          <div>
              <img src={card.img} alt="" className='vin-im' />
            </div>

             <h2
              className="vin-h3"
            >
              {card.title}
            </h2>
            <div className="det" style={{paddingBottom:'10px'}}>
            <p
               style={{
                // textAlign: "center",
                paddingTop: "3%",
                fontSize: "17px",
                color: "black",
               }}
              >
                {card.price}
            </p>


            <Link to= {`/product/${card.id}`}>
            <button 
             style={{
          // marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        > Details</button>
            </Link>

          </div>


            
        
        </div>
      ))}

       {filteredCards.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>No Product Found</p>
      )}
    
    </div>

     <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=2348145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
      </div>

       </motion.div>
    </div>
  )
}

export default Product
