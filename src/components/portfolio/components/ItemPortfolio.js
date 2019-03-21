import React from 'react';

const  ItemPortfolio = props =>{
  return (
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src={props.content.image} alt={props.content.title} width='400' height='300'/>
        <p><strong>{props.content.title}</strong></p>
        <p>{props.content.description}</p>
      </div>
    </div>
  );
};

export default ItemPortfolio;