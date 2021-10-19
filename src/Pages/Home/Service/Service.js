import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
  //const {service}=props;
  const {name,price,img,id}=service;
  return (
    <div className="service pb-3">
 
     <img src={img} alt=""/>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <p className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, incidunt?</p>
    <Link to={`/booking/${id}`}>
    <button className="btn btn-warning">Book {name.toLowerCase()}</button>
    </Link>
     </div>
    
  );
};

export default Service;