import React from "react";
import "./Map.css";

function Map() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Owerri Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.844539788372!2d7.036997314204343!3d5.485279596002926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429b8e07f7b53b%3A0x67141f4c3b8a9444!2sOwerri%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
      ></iframe>
    </div>
  );
}

export default Map;
