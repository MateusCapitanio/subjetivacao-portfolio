import React from 'react';
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { TbMenu } from 'react-icons/tb'

export default function MobileHeader() {

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button onClick={() => setShowSidebar(!showSidebar)} >
        <TbMenu />
      </button>
      <div className={clsx("top-0 right-0 w-[50vw] bg-white  p-10  text-white fixed h-[100vh] z-10", showSidebar ? "translate-x-0 " : "translate-x-[100vh]")}>
        <button
          className="flex text-black items-center cursor-pointer fixed right-10 top-6"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <ul>
          <div className="">
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Tratamentos</Link></li>
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Serviços</Link></li>
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Para empresas</Link></li>
          </div>
          <div className="">
            <li>
              <Link
                href="https://www.linkedin.com/in/renata-aragao"
                target="_blank"
                rel='noreferrer'
                className="flex items-center drop-shadow-lg gap-1 bg-blue-600 py-1 px-2 text-white rounded"
              >
                <AiFillLinkedin />
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/5521980482411"
                target="_blank"
                rel='noreferrer'
                className="flex items-center drop-shadow-lg gap-1 bg-[#F7D1D1] py-1 px-2 text-[#333333] rounded">
                <BsWhatsapp color='#333333' />
                Whatsapp
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/subjetivacao"
                target="_blank"
                rel='noreferrer'
                className="flex items-center drop-shadow-lg gap-1 bg-gradient-to-r from-[#FEC761] to-[#DB2E7C] py-1 px-2 text-white rounded">
                <AiOutlineInstagram />
                Instagram
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  )
}
