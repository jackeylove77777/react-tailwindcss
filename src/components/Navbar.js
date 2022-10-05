import React from 'react'
import {useState} from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
const Navbar = () => {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-10">
      <div className="h-full w-full flex justify-between items-center px-2">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
          </ul>
        </div>
        <div className="hidden md:flex mr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {show ? (
            <MenuIcon className="w-6 mr-2"></MenuIcon>
          ) : (
            <XIcon className="w-6 mr-2"></XIcon>
          )}
        </div>
      </div>
      <ul className={show ? "hidden" : "absolute w-full bg-zinc-200 px-8"}>
        <li className="border-b-2 border-zinc-400 ">Home</li>
        <li className="border-b-2 border-zinc-400 ">About</li>
        <li className="border-b-2 border-zinc-400 ">Support</li>
        <li className="border-b-2 border-zinc-400 ">Platforms</li>
        <div className="flex my-4 flex-col">
          <button className=" py-3 px-8 bg-transparent text-black mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar