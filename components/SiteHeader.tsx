import Image from "next/image";
import Logo from '../img/Logo.png'
import GitHubLogo from '../img/GitHubLogo.png'
import styles from '../styles/SiteHeader.module.css'
import Link from "next/link";

const SiteHeader = () => {
  return(
    <nav className={styles.nav}>
        <div className={styles.inline_logo}>
          <Image src={Logo} width={35} height={35} alt="Logo"/>
          <h1>Healthy</h1>
        </div>
        <Link href={'https://github.com/pmadinga/healthyapp'} className={styles.git}>
          <a>
            <Image className={styles.git} src={GitHubLogo} width={35} height={35} alt='GitHub Logo'/>
          </a>
        </Link>
    </nav>
  )
}

export default SiteHeader