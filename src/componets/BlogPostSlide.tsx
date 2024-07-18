import Link from "next/link"
import Image from "next/image"
import { RightArrow } from "./IconsPalette"
import styles from './style.module.css'

export default function BlogPostSlide(){
    return(
        <div className={styles.blog_post_slide}>
        <h1 className={styles.blog_post_slide_heading}>Blog Posts and Publications</h1>
        <h1 className={styles.web_blog_post_slide_heading}>Blog Posts and Publications</h1>
        <div className={styles.blog_post_slide_cards}>

          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>
          
          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>

          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>

          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>

          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>

          <div className={styles.blog_post_slide_card}>
            <Image src="/img/slide-01.jpg" alt="image" className={styles.blog_post_slide_card_banner} width={100} height={100}/>
            <div className={styles.blog_post_slide_card_content_one}>
              <p>John Doe</p>
              <p>5/15/24</p>
            </div>
              <h1 className={styles.blog_post_slide_card_heading}>Collaboration of NITDA WITH NSRDA</h1>
              <Link href="#" className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
              </Link>
          </div>


        </div>
      </div>
    )
}