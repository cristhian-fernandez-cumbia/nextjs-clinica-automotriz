import logo_clinica_automotriz from './../../app/assets/img/logo_clinica_automotriz.png'
import Image from 'next/image';
import Menu from "../menu/Menu"


const Header = () => {
  return (
    <div className="flex bg-black lg:bg-transparent justify-between items-center py-4  px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 fixed top-0 w-full z-50">
      <Image src={logo_clinica_automotriz} alt="logo_clinica_automotriz" className="w-36 lg:w-60" />
      <Menu />
    </div>
  )
}

export default Header