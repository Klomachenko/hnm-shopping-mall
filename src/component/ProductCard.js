import React from 'react';

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className='card'>
      <img src={item?.img} alt='' />
      <div className='choice'>
        {item?.choice === true ? 'Conscious Choice' : ''}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className='new-product'>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
