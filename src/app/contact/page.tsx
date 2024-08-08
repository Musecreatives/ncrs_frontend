import Image from "next/image";
import styles from "./styles.module.css"
import { Phone, Mail } from "@/componets/IconsPalette";

export default function Contact(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Contact</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Contact  Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_container_form_map}>
                        <div className={styles.section_two_container_line}></div>
                        <h1 className={styles.section_two_container_heading}>Contact Us</h1>
                        <p className={styles.section_two_container_paragraph}>Got any questions about us and our projects and programs? We’re here to help and assist you</p>
                        <form className={styles.section_two_form}>
                            <div className={styles.section_two_form_cover}>
                            <label htmlFor="name" className={styles.section_two_form_label}>Full Name</label>
                            <input type="text" className={styles.section_two_form_input} id="name" />
                            <label htmlFor="email" className={styles.section_two_form_label}>Email</label>
                            <input type="email" className={styles.section_two_form_input} id="email"/>
                            <label htmlFor="subject" className={styles.section_two_form_label}>Subject</label>
                            <input type="text" className={styles.section_two_form_input} id="subject"/>
                            </div>
                            
                            <input type="submit" className={styles.section_two_form_submit} placeholder="Submit"/>
                        </form>
                        <div className={styles.section_two_detail}>
                            <div className={styles.section_two_detail_container}>
                                    <div className={styles.section_two_detail_icon_text}>
                                        <Phone iconStyle={styles.section_two_detail_icon}/>
                                        <div className={styles.section_two_detail_text}>
                                            <p>Phone</p>
                                            <p>+2348155212556</p>
                                        </div>  
                                    </div>

                                    <div className={styles.section_two_detail_icon_text}>
                                        <Mail iconStyle={styles.section_two_detail_icon}/>
                                        <div className={styles.section_two_detail_text}>
                                            <p>E-MAIL</p>
                                            <p>info@ncrs.gov.ng</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section_two_banner_cover}>
                        <Image src="/img/map.png" alt='image' className={styles.section_two_banner} fill/>
                    </div>
                </div>
            </section>
        </main>
    )
}