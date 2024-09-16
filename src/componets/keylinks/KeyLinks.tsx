"use client"
import { Trend, ListTag, Analytics, List, People, WebTrend } from "@/componets/IconsPalette";
import styles from './styles.module.css'
import {motion} from "framer-motion"
import {useRef, useEffect, useState} from "react"


export default function KeyLinks(){
    return(
        <div className={styles.mobile_key_links}>
        <h1 className={styles.mobile_key_links_heading}>Key Links</h1>
        
        <div className={styles.mobile_key_links_containers}>

          <div className={styles.mobile_key_link_container}>
            <div className={styles.mobile_key_link_container_section_one}>
              <div className={styles.mobile_key_link_icon_cover}>
                <Trend iconStyle={styles.mobile_key_link_icon}/>
              </div>
              <p>Growth</p>
            </div>
              <p className={styles.mobile_key_link_container_text}>Our Progress in this sector</p>
              <span className={styles.mobile_key_link_container_bottom_clip}></span>
          </div>
         
          <div className={styles.mobile_key_link_container}>
            <div className={styles.mobile_key_link_container_section_one}>
              <div className={styles.mobile_key_link_icon_cover}>
                  <Trend iconStyle={styles.mobile_key_link_icon}/>
              </div>
              <p>Growth</p>
            </div>
              <p className={styles.mobile_key_link_container_text}>Our Progress in this sector</p>
              <span className={styles.mobile_key_link_container_bottom_clip}></span>
          </div>
         
          <div className={styles.mobile_key_link_container}>
            <div className={styles.mobile_key_link_container_section_one}>
              <div className={styles.mobile_key_link_icon_cover}>
                  <Trend iconStyle={styles.mobile_key_link_icon}/>
              </div>
              <p>Growth</p>
            </div>
              <p className={styles.mobile_key_link_container_text}>Our Progress in this sector</p>
              <span className={styles.mobile_key_link_container_bottom_clip}></span>
          </div>
         
          <div className={styles.mobile_key_link_container}>
            <div className={styles.mobile_key_link_container_section_one}>
              <div className={styles.mobile_key_link_icon_cover}>
                <Trend iconStyle={styles.mobile_key_link_icon}/>
              </div>
              <p>Growth</p>
            </div>
              <p className={styles.mobile_key_link_container_text}>Our Progress in this sector</p>
              <span className={styles.mobile_key_link_container_bottom_clip}></span>
          </div>
         
        </div>
      </div>
    )
}

export function WebKeyLinks(){

  const [width, setWidth] = useState(0)
  const outerCardRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if (outerCardRef.current) {
      const scrollWidth = outerCardRef.current.scrollWidth;
      const offsetWidth = outerCardRef.current.offsetWidth;
      if (scrollWidth !== undefined && offsetWidth !== undefined) {
          setWidth(scrollWidth - offsetWidth);
      }
  }
  },[])

    return(
        <div className={styles.web_key_links}>
            <h1 className={styles.web_key_links_heading}>Key links</h1>
            
            <motion.div ref={outerCardRef} whileTap={{cursor:"grabbing"}} className={styles.outer_card}>
              <motion.div drag="x" dragConstraints={{right:0, left:-width}} className={styles.web_link_key_cards}>

                <div className={styles.web_link_key_card}>
                    <p className={styles.web_key_links_card_heading}>Agency interventions</p>
                    <div className={styles.web_key_links_card_content}>
                        <List iconStyle={styles.web_key_links_card_icon}/>
                        <p>List of Interventions by NCRS</p>
                    </div>
                    <span className={styles.web_key_link_container_bottom_clip}></span>
                </div>

                <div className={styles.web_link_key_card}>
                    <p className={styles.web_key_links_card_heading}>Growth</p>
                    <div className={styles.web_key_links_card_content}>
                        <WebTrend iconStyle={styles.web_key_links_card_icon}/>
                        <p>Our Progress in this sector</p>
                    </div>
                    <span className={styles.web_key_link_container_bottom_clip}></span>
                </div>

                <div className={styles.web_link_key_card}>
                    <p className={styles.web_key_links_card_heading}>Leadership</p>
                    <div className={styles.web_key_links_card_content}>
                        <People iconStyle={styles.web_key_links_card_icon}/>
                        <p>Meet our Directors</p>
                    </div>
                    <span className={styles.web_key_link_container_bottom_clip}></span>
                </div>

                {/* <div className={styles.web_link_key_card}>
                    <p className={styles.web_key_links_card_heading}>Leadership</p>
                    <div className={styles.web_key_links_card_content}>
                        <Analytics iconStyle={styles.web_key_links_card_icon}/>
                        <p>Meet our Directors</p>
                    </div>
                    <span className={styles.web_key_link_container_bottom_clip}></span>
                </div> */}

              </motion.div>
            </motion.div>
            
        </div>
    )
}