import Link from "next/link";
import Image from "next/image";
import styles from './style.module.css'

export default function ProgramsSlide(){
    return(
        <div className={styles.programs}>
        <h1 className={styles.programs_heading}>Recent Programs</h1>
        <div className={styles.programs_cards}>

          <div className={styles.programs_card}>
            <Image src="/img/slide-02.jpg" alt="image" className={styles.programs_card_banner} width={100} height={100}/>
            <div className={styles.programs_card_content}>
              <p className="text-[18px]">Climate Change  Awareness Campaign</p>
              <div className={styles.programs_card_content_link_cover}>
                <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
              </div>
            </div>
          </div>

          <div className={styles.programs_card}>
            <Image src="/img/slide-02.jpg" alt="image" className={styles.programs_card_banner} width={100} height={100}/>
            <div className={styles.programs_card_content}>
              <p className="text-[18px]">Climate Change  Awareness Campaign</p>
              <div className={styles.programs_card_content_link_cover}>
                <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
              </div>
            </div>
          </div>

          <div className={styles.programs_card}>
            <Image src="/img/slide-02.jpg" alt="image" className={styles.programs_card_banner} width={100} height={100}/>
            <div className={styles.programs_card_content}>
              <p className="text-[18px]">Climate Change  Awareness Campaign</p>
              <div className={styles.programs_card_content_link_cover}>
                <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
              </div>
            </div>
          </div>

          <div className={styles.programs_card}>
            <Image src="/img/slide-02.jpg" alt="image" className={styles.programs_card_banner} width={100} height={100}/>
            <div className={styles.programs_card_content}>
              <p className="text-[18px]">Climate Change  Awareness Campaign</p>
              <div className={styles.programs_card_content_link_cover}>
                <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
}