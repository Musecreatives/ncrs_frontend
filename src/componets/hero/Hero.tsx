import React from 'react'
import styles from './styles.module.css'

export default function Hero() {
  return (
    <div className={styles.mobile_hero}>
        <h1 className={styles.mobile_hero_heading}>Here at NCRS We bring to life the future of geography</h1>
    </div>
  )
}

export function WebHero(){
    return (
        <div className={styles.web_hero}>
            <div className={styles.web_hero_layer}></div>
            <div className={styles.web_hero_heading}>
              <span className={styles.web_hero_dash}></span>
              <p className={styles.web_hero_text_one}>Here at NCRS</p> 
              <h1 className={styles.web_hero_text_two}>We bring to life the future of geography</h1>
              <p className={styles.web_hero_text_three}>The project aims to design and develop a comprehensive website for the National Center for Remote Sensing (NCRS) along with a consultancy subdomain.</p>
            </div>
        </div>
    )
}
