import React from 'react';

const Service = ({service}) => {
  //const {service}=props;
  const {name,price,img}=service;
  return (
    <div>
      <img src={img} alt=""/>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  );
};

export default Service;