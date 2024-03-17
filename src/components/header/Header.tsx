import logo_clinica_automotriz from './../../app/assets/img/logo_clinica_automotriz.png'
import Image from 'next/image';
import Menu from "../menu/Menu"


const Header = () => {
  return (
    <div className="flex bg-black justify-between items-center py-4 px-5 lg:py-4 lg:px-16 relative">
      <Image src={logo_clinica_automotriz} alt="logo_clinica_automotriz" className="w-36 lg:w-60" />
      <Menu />
    </div>
  )
}

export default Header