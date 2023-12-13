import React, { useContext } from 'react';

// import link
import { Link } from 'react-router-dom';

//import icons
import { IoMdArrowForward, IoMdClose} from 'react-icons/io';
import { FiTrash2} from 'react-icons/fi';

// import components
import CartItem from '../components/CartItem';

// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

// import cart context
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
  <div className={`${
    isOpen ? 'right-0' : '-right-full'}
    w-full bg-[#e4d4c8] fixed top-0 h-full
    shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
    duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto overflow-x-hidden`}
  >
    
    <div className='flex items-center justify-between py-6
    border-b border-[#a47551]'>
      <div className='uppercase text-sm
      font-semibold'>Shopping Bag ({itemAmount})</div>

      {/* icon */}

      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex 
      justify-center items-center'>
        <IoMdClose className='text-2xl text-orange-500' />
      </div>

      
      </div>
    <div className='flex flex-col gap-y-2 
      border-b border-[#a47551]'> 
      {cart.map(item => {
      return (
      <CartItem item={item} key={item.id} />
      );
    })
    }
    </div>

    <div className='flex flex-col gap-y-3 py-4
      mt-4'>
      <div className='flex w-full justify-between items-center'>

          {/* total */}
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
        </div>

        {/* clear cart icon */}

        <div onClick={clearCart} 
          className='cursor-pointer py-4 bg-orange-500 text-white
          w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2/>
        </div>
        
      </div>

       <Link
        to='/'
        className='bg-[#a47551] flex p-4 justify-center
        items-center text-primary w-full font-medium'>
         View Cart
      </Link>

      <Link to='/'
        className='bg-orange-500 flex p-4 justify-center
        items-center text-primary text-white w-full font-medium mb-4'>
          Checkout
      </Link> 

    </div>
  </div>
  );
};

export default Sidebar;
