import React from "react";

export default function Card({ href, imgAlt, imgSrc }) {
    return (
    <div>
     <a href= {href} >
     <img width={300} src={imgSrc} alt={imgAlt}/>
     </a>
     </div>
    );
}