// import React from 'react'
import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './Product.css'
import Fakenav from '../Component/Fakenav'
 export const cards = [
    {
      id:2,
    title : 'Iphone 7+ Branded',
    price: '120$',
    img: 'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_640.jpg'
    },
  
    {
      id:4,
    title : 'Oppo Exlir 22x',
    price: '101$',
    img: 'https://cdn.pixabay.com/photo/2017/08/02/13/28/mobile-2571625_640.jpg'
    },
    
    
    {
      id:7,
    title : 'Hawali 33 Ultra',
    price: '110$',
    img: 'https://cdn.pixabay.com/photo/2017/08/07/07/26/mobile-2600997_640.jpg'
    },

    {
      id:9,
    title : 'Iphone11 Branded',
    price: '400$',
    img: 'https://cdn.pixabay.com/photo/2022/09/13/16/49/iphone-7452398_640.jpg'
    },{
      id: 11,
    title : 'Samsung S9 20110 Model',
    price: '30$',
    img: 'https://cdn.pixabay.com/photo/2022/03/28/08/23/samsung-phone-7096959_640.jpg'
    },{
      id: 12,
    title : 'Lenovo Apperal Palmtop',
    price: '101$',
    img: 'https://cdn.pixabay.com/photo/2017/08/07/03/51/ipad-2599486_640.jpg'
    },{
      id: 13,
    title : 'Samasung S21+ Ultra',
    price: '900$',
    img: 'https://cdn.pixabay.com/photo/2022/03/12/09/24/smartphone-7063771_640.jpg'
    },{
      id: 16,
    title : 'Iphone Xr London Use',
    price: '250$',
    img: 'https://cdn.pixabay.com/photo/2019/04/12/21/29/iphone-x-4123300_640.jpg'
    },{
      id: 17,
    title : 'Iphone 17 Promax',
    price: '1200$',
    img: 'data:image/jpeg;base64,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'
    }
    ,{
      id: 28,
    title : 'Redmi A3x',
    price: '101$',
    img: 'data:image/jpeg;base64,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'
    },
    {
      id: 32,
    title : 'Samsung A24+ Elixer',
    price: '10$',
    img: 'https://cdn.pixabay.com/photo/2019/08/26/03/58/samsung-4430690_640.jpg'
    },{
      id: 34,
    title : 'Iphone 13 Promax',
    price: '600$',
    img: 'https://cdn.pixabay.com/photo/2022/09/24/20/32/iphone-7477151_640.jpg'
    },{
      id: 36,
    title : 'Samsung S10 ',
    price: '290$',
    img: 'https://cdn.pixabay.com/photo/2019/12/27/01/45/samsung-4721539_640.jpg'
    },

    {
      id: 37,
    title : 'Iphone 6S+ ',
    price: '180$',
    img: 'https://cdn.pixabay.com/photo/2014/12/10/12/26/iphone-563067_640.jpg'
    },
    {
      id: 38,
    title : 'Hawali POP 39+',
    price: '390$',
    img: 'https://cdn.pixabay.com/photo/2022/12/28/06/04/oppo-7682243_640.jpg'
    },
    {
      id: 39,
    title : 'Oppo D27 Cular',
    price: '390$',
    img: 'https://cdn.pixabay.com/photo/2019/08/22/12/09/coffee-4423348_1280.jpg'
    },
    {
      id: 40 ,
    title : 'Iphone XXmax ',
    price: '250$',
    img: 'https://cdn.pixabay.com/photo/2018/03/30/02/01/cell-phone-camera-3274220_640.jpg'
    },
    {
      id: 41,
    title : 'Samsung 21 Ultra',
    price: '800$',
    img: 'https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg'
    },
    {
      id: 42,
    title : 'REDmi 14c ',
    price: '302$',
    img: 'https://cdn.pixabay.com/photo/2020/11/05/10/39/smartphone-5714763_640.jpg'
    },
    {
      id: 43,
    title : 'Ipad AXS',
    price: '210$',
    img: 'https://cdn.pixabay.com/photo/2016/11/03/21/34/google-on-your-smartphone-1796337_640.jpg'
    },
    {
      id:44 ,
    title : 'Samsung A9 Branded',
    price: '120$',
    img: 'https://cdn.pixabay.com/photo/2019/12/27/01/48/samsung-4721547_640.jpg'
    },
    {
      id:45 ,
    title : 'Samsung A7 Ipad',
    price: '190$',
    img: 'https://cdn.pixabay.com/photo/2020/01/15/06/37/black-4766996_640.jpg'
    },
    {
      id:46 ,
    title : 'iphone 14 Promax',
    price: '600$',
    img: 'https://cdn.pixabay.com/photo/2022/09/26/19/40/iphone-7481400_640.jpg'
    },
    {
      id: 47,
    title : 'iphone 15 pro',
    price: '700$',
    img: 'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_640.jpg'
    },
    {
      id:48 ,
    title : 'Noir AS67',
    price: '230$',
    img: 'https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_640.jpg'
    },{
      id: 49,
    title : 'Iphone 12 ',
    price: '400$',
    img: 'https://cdn.pixabay.com/photo/2022/04/25/17/34/iphone-7156594_640.jpg'
    },{
      id:50 ,
    title : 'Google Pixer 55',
    price: '608$',
    img: 'https://cdn.pixabay.com/photo/2019/11/23/11/33/mobile-phone-4646854_640.jpg'
    },{
      id: 51,
    title : 'Samsung S20 +',
    price: '630$',
    img: 'https://cdn.pixabay.com/photo/2020/05/18/22/28/samsung-5188631_640.jpg'
    },{
      id: 52,
    title : 'Iphone 8+ London Used',
    price: '200$',
    img: 'https://cdn.pixabay.com/photo/2014/11/25/23/04/iphone-545772_640.jpg'
    },
    
  ]


const Product = () => {

  const [user , setUser] = useState(null)
  
  useEffect(() => {
    const savedUser  = 
    localStorage.getItem('user')
    if (savedUser){
      setUser(JSON.parse(savedUser))
    }
  }, [])
  




  const [search, setSearch] = useState("");
   const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = cards.filter((b) =>
    b.title.toLowerCase().includes(search)
  );
  return (
    <div className="vin">

      
      <div className="product-oo">
      
          {user ? (
            <span >
              Welcome, <b>{user.firstName} {user.lastName}</b> 
            </span>
          ) : (
            <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )}

        
           

    </div>

      

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
