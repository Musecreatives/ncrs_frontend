"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Arrow } from '../IconsPalette'
import styles from './styles.module.css'

export default function Navigation() {
  const [isOpened, setIsOpened] = useState(false)


  const openMenu = ()=>{
    setIsOpened(true)
    document.body.classList.add('no-scroll')
  }

  const closeMenu = ()=>{
    setIsOpened(false)
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className={styles.nav}>
      <Link href='/'>
        <Image src="/img/nrcs-logo.png" alt='ncrs logo' className={styles.nav_logo} height={100} width={100}/>
      </Link>
        <div onClick={()=>openMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.nav_bars}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        {isOpened &&<div className={styles.mobliemenu_cover} onClick={()=>closeMenu()}>
           <MobileMenu />
        </div>}
    </div>
  )
}

export function WebNavigator(){
  return (
    <div className={styles.web_nav}>
      <Link className={styles.web_nav_logo} href="/">
        <Image src="/img/nrcs-logo.png" alt='ncrs logo'  height={100} width={100}/>
      </Link>
    <div className={styles.web_nav_links}>
      <Link className={styles.web_link} href='/'>Home</Link>

      <div className={styles.dropdown}>
        <p className={`${styles.link_arrow} ${styles.web_link}`}>About <span className={styles.about_span}>NCRS</span> <Arrow iconStyle={styles.nav_arrow}/></p>
        <div className={styles.about_dropdown}>
          <Link href="/about" className={styles.about_dropdown_link}>About Us</Link>
          <Link href="/background" className={styles.about_dropdown_link}>Our Background</Link>
          <Link href="/mandate" className={styles.about_dropdown_link}>Our Mandate</Link>
          <Link href="/departments" className={styles.about_dropdown_link}>Departments</Link>
          <Link href="/management" className={styles.about_dropdown_link}>Management Team</Link>
          <Link href="/organogram" className={styles.about_dropdown_link}>Organogram</Link>
          <Link href="/laboratories" className={styles.about_dropdown_link}>Laboratories</Link>
        </div>
      </div>

        <div className={styles.dropdown}>
          <p className={`${styles.link_arrow} ${styles.web_link} group`}>Services <Arrow iconStyle={styles.nav_arrow}/></p>
          <div className={styles.about_dropdown}>
            <Link href="/services" className={styles.about_dropdown_link}>Our Services</Link>
            <Link href="/downloads" className={styles.about_dropdown_link}>Downloads</Link>
          </div>
        </div>

        <div className={styles.dropdown}>
          <p className={`${styles.link_arrow} ${styles.web_link}`}>Media<Arrow iconStyle={styles.nav_arrow}/></p>
          <div className={styles.about_dropdown}>
            <Link href="/news" className={styles.about_dropdown_link}>News</Link>
            <Link href="/gallery" className={styles.about_dropdown_link}>Gallery</Link>
          </div>
        </div>
      <Link className={styles.web_link} href='#'>GeoSmart Digital</Link>
      <Link className={styles.web_link} href='/contact'>Contact Us</Link>
      
    </div>
</div>
  )
}


export function MobileMenu(){
  return(
    <div className={styles.mobliemenu}>
      <Link href="/" className={styles.mobliemenu_link}>Home</Link>
      <Link href="/about" className={styles.mobliemenu_link}>About us</Link>
      <Link href="/departments" className={styles.mobliemenu_link}>Departments</Link>
      {/* <Link href="/programs" className={styles.mobliemenu_link}>Programs</Link> */}
      <Link href="/news" className={styles.mobliemenu_link}>News</Link>
      <Link href="/background" className={styles.mobliemenu_link}>Our background</Link>
      <Link href="/mandate" className={styles.mobliemenu_link}>Mandate</Link>
      <Link href="/laboratories" className={styles.mobliemenu_link}>Laboratries</Link>
      <Link href="/services" className={styles.mobliemenu_link}>Services</Link>
      <Link href="/downloads" className={styles.mobliemenu_link}>Downloads</Link>
      <Link href="/gallery" className={styles.mobliemenu_link}>Gallery</Link>
      <Link href="/organogram" className={styles.mobliemenu_link}>Organogram</Link>
      <Link href="/contact" className={styles.mobliemenu_link}>Contact Us</Link>
    </div>
  )
}