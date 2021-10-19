import React from 'react';

const Expert = ({expert}) => {
  const {name,img,expertize}=expert;
  return (
<div className="col-lg-4  col-small-6 col-12  container">
<div className="">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{expertize}</h5>
    </div>
</div>
  );
};


export default Expert;