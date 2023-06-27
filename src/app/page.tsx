import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      {/*DEIXEI ESSE EXEMPLO AQUI EMBAIXO PRA PODER DAR UMA OLHADA 
      DPS NO DESENVOLVIMENTO COM A FOTO DELA E TALS JA, TEM FOTO DELA JA NA PASTA PUBLIC*/}
      {/* <div className="flex items-center justify-center">
      
      <div className="bg-green-500 w-44">
        ashdkjasdkasjhskdhjsdh kas d askjdh askj dasjk hdjask dhsak dhas 
      </div>
      <Image 
        className="m-36 rounded-full"
        alt="Contém uma imagem profissional"
        height={420}
        width={420}
        src='/images/profilePhoto.png'
      />
      </div> */}
    </main>
  )
}
