import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Arrow } from './IconsPalette'
import styles from './style.module.css'

export default function Navigation() {
  return (
    <div className={styles.nav}>
        <Image src="/img/nrcs-logo.png" alt='ncrs logo' className={styles.nav_logo} height={100} width={100}/>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.nav_bars}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
    </div>
  )
}

export function WebNavigator(){
  return (
    <div className={styles.web_nav}>
    <Image src="/img/nrcs-logo.png" alt='ncrs logo' className={styles.web_nav_logo} height={100} width={100}/>
    <div className={styles.web_nav_links}>
      <Link className={styles.web_link} href='#'>Home</Link>
      <Link className={`${styles.link_arrow} ${styles.web_link}`} href='#'>About <p className="font-bold">NCRS</p> <Arrow/></Link>
      <Link className={`${styles.link_arrow} ${styles.web_link}`} href='#'>Services <Arrow/></Link>
      <Link className={`${styles.link_arrow} ${styles.web_link}`} href='#'>Media <Arrow/></Link>
      <Link className={styles.web_link} href='#'>GeoSmart Digital</Link>
      <Link className={styles.web_link} href='#'>Contact Us</Link>
      
    </div>
</div>
  )
}
