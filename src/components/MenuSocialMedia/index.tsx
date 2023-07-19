import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import Division from "../Division"
import { BsWhatsapp } from "react-icons/bs"

export default function MenuSocialMedia () {
  return (
    <header>
      <ul className="flex flex-col items-center bg-white drop-shadow-lg p-2 mr-2 rounded-md">
        <li className="bg-blue-600 p-2 rounded-full">
        <AiFillLinkedin
          color="white"
          size={25}
        />
        </li>
        <Division />
        <li className="bg-[#32D951] p-2 rounded-full">
          <BsWhatsapp
            color='white'
            size={25}
          />
        </li>
        <Division />
        <li className="bg-gradient-to-r from-[#FEC761] to-[#DB2E7C] p-2 rounded-full">
          <AiOutlineInstagram
            color='#333333'
            size={25}
          />
        </li>
      </ul>
    </header>
  )
}