// import React from 'react'
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './Product.css'
import Fakenav from '../Component/Fakenav'

 export const laptops = [
    {
      id:70,
    title : 'Macbook 2016 i Desxtop',
    price: '80$',
    img: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg'

    },
    {
      id:71,
    title : 'Optimus Dell Laptops 2020 Series',
    price: '200$',
    img: 'https://cdn.pixabay.com/photo/2022/09/30/00/34/computer-7488371_640.jpg'
    },
    {
      id:72,
    title : 'KD2th Generation Laptop',
    price: '210$',
    img: 'https://cdn.pixabay.com/photo/2013/07/13/11/46/laptop-158648_640.png'
    },{
      id: 73,
    title : 'Lenovo Apperal Palmtop',
    price: '101$',
    img: 'https://cdn.pixabay.com/photo/2017/08/07/03/51/ipad-2599486_640.jpg'
    },{
      id: 545,
    title : 'Mac Book A22 Orrich',
    price: '1000$',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_640.jpg'
    },{
      id: 75,
    title : 'Dell Latitude 2000 ',
    price: '400$',
    img: 'https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=1JQYD-7e9EfVR4LCekw-NvYxyX23U81k-TRFJ70SXqY='
    },
    {
      id: 76,
    title : 'Hp Laptop Loadge',
    price: '500$',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg'
    },
    {
      id: 775,
    title : 'Google Pixer Laptop',
    price: '300$',
    img: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg'
    },

    {
      id: 78,
    title : 'DELL 202 Palmtop',
    price: '100$',
    img: 'https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_640.jpg'
    },{
      id:79 ,
    title : 'Lenovo 2020 ED',
    price: '902$',
    img: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg'
    },{
      id: 80,
    title : 'Gogle Pixer  Latitudr ',
    price: '200$',
    img: 'https://cdn.pixabay.com/photo/2016/06/03/12/37/internet-search-engine-1433323_640.jpg'
    },{
      id:81 ,
    title : 'Dell Latitude E7450',
    price: '500$',
    img: 'https://cdn.pixabay.com/photo/2020/04/13/14/04/google-5038526_640.jpg'
    },{
      id:82 ,
    title : 'Hp 202 core ',
    price: '450$',
    img: 'https://cdn.pixabay.com/photo/2020/05/15/20/14/laptop-5175029_640.jpg'
    },{
      id: 83,
    title : 'Icore 202 DeskTop',
    price: '700$',
    img: 'https://cdn.pixabay.com/photo/2014/02/06/07/44/monitor-259758_640.jpg'
    },{
      id:84 ,
    title : '4th GEN Hp38',
    price: '340$',
    img: 'https://cdn.pixabay.com/photo/2019/11/02/15/22/computer-vintage-4596623_640.jpg'
    },{
      id: 85,
    title : 'Dekk Latitude e02928',
    price: '400$',
    img: 'https://cdn.pixabay.com/photo/2015/05/01/18/33/macbook-748857_640.jpg'
    },{
      id: 86,
    title : 'Macbook 15PROMAX',
    price: '800$',
    img: 'https://cdn.pixabay.com/photo/2017/06/07/21/29/macbook-pro-2381729_640.jpg'
    },{
      id:87 ,
    title : 'Macbook Palmtop',
    price: '300$',
    img: 'https://cdn.pixabay.com/photo/2018/02/10/18/16/apple-3144234_640.jpg'
    },{
      id:88 ,
    title : 'Mac Pixer ',
    price: '800$',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg'
    },{
      id: 89,
    title : 'Sony D27 icore5',
    price: '550$',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_640.jpg'
    },{
      id: 90,
    title : 'Macbook 21 PRO',
    price: '500$',
    img: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_640.jpg'
    },{
      id: 91,
    title : 'Dell Latitude E5083',
    price: '',
    img: 'https://cdn.pixabay.com/photo/2021/02/26/10/47/freelance-6051357_640.jpg'
    },{
      id: 92,
    title : 'Pink Macbook Pixer',
    price: '700$',
    img: 'https://cdn.pixabay.com/photo/2016/11/23/14/50/apple-1853337_640.jpg'
    },
  ]


const Product = () => {
  const [search, setSearch] = useState("");
   const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = laptops.filter((b) =>
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
                        <a href="tel:=08145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
      </div>

       </motion.div>
      
    </div>
  )
}

export default Product
