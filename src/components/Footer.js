import React from 'react'

const Footer = ({myFooter}) => {
  return (
    <footer className='bg-black text-white flex flex-col w-full text-center fixed bottom-0 p-8'>{myFooter}</footer>
  )
}

export default Footer