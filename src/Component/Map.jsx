import React from 'react'

const Map = () => {
  return (
    <div style={{backgroundColor:'#fff', borderRadius: '16px' ,boxShadow:'0 4px 12px grey' ,
        maxWidth: '1180px', width: '90%', margin: '40px auto'
    }}>
    
    <h3 style={{ color: '#5c5a5aff', marginBottom: '10px', textAlign:'center' , padding:'10px'}}>
        Head Office Location
    </h3>

    <div  style={{borderRadius: '12px', overflow: 'hidden' , display: 'flex' , justifyContent:'center'}}>

        <iframe  title='larcade-map' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.5140944806567!2d7.003517774040204!3d5.490386634307986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425b9885ff69ef%3A0xba49edfc584fff66!2sLarcade%20Shopping%20Centre!5e0!3m2!1sen!2sng!4v1762068917436!5m2!1sen!2sng" 
        width="980" height="500" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    </div>
    
      
    </div>
  )
}

export default Map
