import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex justify-center'>
      <header className="flex justify-between fixed bg-white drop-shadow-lg py-5 px-4 mt-10 w-full max-w-7xl rounded-lg">
        <span className="font-bold text-lg">Renata Aragão</span>
        <ul className="flex gap-14">
          <div className="flex gap-2 items-center">
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Tratamentos</Link></li>
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Serviços</Link></li>
            <li><Link rel='noreferrer' className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Para empresas</Link></li>
          </div>
          <div className="flex gap-2 items-center">
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
      </header>
    </div>
  )
}

export default Header;