import React, {useContext} from 'react';
// import link 
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill, BsEye, BsHeart } from 'react-icons/bs';


const Product = ({ product }) => {
  console.log(product);
  // destructure product
  const {id, image, category, title, price} = product;
  return (
  <div>
    <div className='border border-[#a47551] h-[300px] pb-4 mb-4 relative overflow-hidden group transition'>1
    <div className='w-full h-full flex justify-center items-center'>
      {/* image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3
          transition duration-300' src={image} alt='' />
        </div>
    </div>

    {/* buttons */}
    <div className='absolute top-6 -right-11
     group-hover:right-5 p-2 flex flex-col
    items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all
    duration-300'>
        <button>
          <div className='flex justify-center items-center 
           text-[#e4d4c8] w-12 h-12 bg-orange-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link 
        to={`/product/${id}`} className='w-12 h-12 bg-[#e4d4c8] flex justify-center
        items-center text-primary drop-shadow-xl'>
          <BsHeart className='text-orange-500' />
        </Link>
    </div>
    </div>
    {/* category , title & price */}
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>
        {category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'> $ {price}</div>
    </div>
  </div>
  );
};

export default Product;
