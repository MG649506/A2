import React from 'react';


const Nav = ({ myText }) => {
  return (
    <nav className="bg-black text-white flex flex-col w-full items-center fixed top-0  text-2xl font-bold ">
<div class="flex items-center justif-between">

      <div className=" flex-col flex items-center justif-between ">
      <img src='logo2.png' alt='logo' className='h-32 w-32' />
      </div>
      
      <div className='flex space-x-10 ml-12 '>
      {myText}
      </div>
      

      </div>
    </nav>
   
  )
}

export default Nav;