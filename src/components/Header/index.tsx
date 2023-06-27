import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export const Header = () => {
  return (
    <div className='flex justify-center'>
      <header className="flex justify-between fixed bg-white drop-shadow-lg py-5 px-4 mt-10 w-full max-w-7xl rounded-lg">
        <span className="font-bold text-lg">Renata Aragão</span>
        <ul className="flex gap-14">
          <div className="flex gap-2 items-center">
            <li><a className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Tratamentos</a></li>
            <li><a className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Serviços</a></li>
            <li><a className="text-[#333333] hover:bg-[#F7D1D1] hover:text-[#333333] py-1 px-2 rounded transition duration-500" href="#">Para empresas</a></li>
          </div>
          <div className="flex gap-2 items-center">
            <li>
              <a
                href="https://www.linkedin.com/in/renata-aragao"
                target="_blank"
                className="flex items-center drop-shadow-lg gap-1 bg-blue-600 py-1 px-2 text-white rounded"
              >
                <AiFillLinkedin />
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5521980482411"
                target="_blank"
                className="flex items-center drop-shadow-lg gap-1 bg-[#F7D1D1] py-1 px-2 text-[#333333] rounded">
                <BsWhatsapp color='#333333' />
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/subjetivacao"
                target="_blank"
                className="flex items-center drop-shadow-lg gap-1 bg-gradient-to-r from-[#FEC761] to-[#DB2E7C] py-1 px-2 text-white rounded">
                <AiOutlineInstagram />
                Instagram
              </a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  )
}

export default Header;