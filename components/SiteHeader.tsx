import Image from "next/image";
import Logo from '../img/Logo.png'

const SiteHeader = () => {
  return(
    <nav>
      <div>
        <Image src={Logo} width={50} height={50} alt="Logo"/>
      </div>
    </nav>
  )
}

export default SiteHeader