import Image from "next/image"
import styles from "./styles.module.css"
import { QuoteLeft, QuoteRight } from "../IconsPalette"

export default function Quote(){
    return(
        <div className={styles.mobile_quote}> 
        <div className={styles.mobile_quote_left}>
         <QuoteLeft/>
        </div>
        <p className={styles.mobile_quote_text}>I stand before you honoured to assume the sacred mandate you have given me. My love for this nation is abiding. My confidence in its people, unwavering. And my faith in God Almighty, absolute. I know that His hand shall provide the needed moral strength and clarity of purpose in those instances when we seem to have reached the limits of our human capacity.</p>
        <div className={styles.mobile_quote_right}>
          <QuoteRight/>
        </div>
      </div>

    )
}

export function WebQuote(){
    return(
        <div className={styles.web_quote}>
          <div className={styles.web_quote_img_cover}>
            <Image src="/img/img-01.jpg" alt="image" className={styles.web_quote_img} fill/>
          </div>
          <div className={styles.web_quote_content}>
            <h1>From the Director General’s Desk</h1>
            <div className={styles.web_quote_text}>
              <div className={styles.web_quote_left_cover}>
                <Image src='/img/quote_left.png' alt='image' className={styles.web_quote_left} fill/>
              </div>
              <p>I stand before you honoured to assume the sacred mandate you have given me. My love for this nation is abiding. My confidence in its people, unwavering. And my faith in God Almighty, absolute. I know that His hand shall provide the needed moral strength and clarity of purpose in those instances when we seem to have reached the limits of our human capacity.</p>
              <p>The project aims to design and develop a comprehensive website for the National Center for Remote Sensing (NCRS) along with a consultancy subdomain. The scope includes the creation of various pages, integration</p>
              <div className={styles.web_quote_right_cover}>
                <Image src='/img/quote_right.png' alt='image' className={styles.web_quote_right} fill/>
              </div>
              <div className={styles.quote_name_bottom}>
                <h1>Dr. David Nyomo Jeb</h1>
                <h1>Director/CE</h1>
              </div>
              
            </div>
          </div>
        </div>
    )
}