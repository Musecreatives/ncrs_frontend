import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '@/componets/IconsPalette'
import BlogPostSlide from '@/componets/BlogPostSlide'

export default function News(){
    return(
        <>
        <main className={styles.news}>
            <section className={styles.web_news_hero}>
                <div className={styles.web_news_hero_layer}></div>
                <div className={styles.web_news_hero_content}>
                    <p>Home / <span>Media</span></p>
                    <div className={styles.web_news_hero_content_sub}>
                        <h1>Latest News & Updates</h1>
                    </div>
                </div>
            </section>
        <section>
            <div className={styles.blog_post_slide}>
                <h1 className={styles.blog_post_slide_heading}>Recent Blog posts and <span>Publications</span></h1>
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
        </section>
        </main>
        </>
    )
}

