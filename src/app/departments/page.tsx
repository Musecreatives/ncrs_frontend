import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '@/componets/IconsPalette'

export default function Department(){
    return(
        <>
        <main className={styles.department}>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <h1>Departments</h1>
                    <p>Our divisions and functions </p>
                </div>
            </section>
            <section className={styles.department_section_one}>
                <h1>Department of Finance & Administrations</h1>
                <p>The department headed by a Deputy Director is subdivided into two sections, namely; General Administration and Finance Sections. The General Administration Section is further subdivided into units for efficient functioning. There are six Units headed by the Chief Administrative/Executive Officer who supervises the activities and staff in each of the units.</p>
                <Link href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle=''/>
                </Link>
            </section>
        </main>
        <WebDepartment/>
        </>
    )
}

export function WebDepartment(){
    return(
        <main className={styles.web_about}>
            <section className={styles.web_about_hero}>
                <div className={styles.web_about_hero_layer}></div>
                <div className={styles.web_about_hero_content}>
                    <p>Home / <span>About NCRS</span></p>
                    <div className={styles.web_about_hero_content_sub}>
                        <p>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        <h1>About NCRS</h1>
                    </div>
                </div>
            </section>
            <section className={styles.web_about_section_two}>
                <div className={styles.web_about_section_two_content_line}></div>
                <div className={styles.web_about_section_two_content_cover}>
                    <div className={styles.web_about_section_two_content}>
                        <h1>History of NCRS</h1>
                        <article>
                            <p>The desire by Nigeria to establish its own comprehensive Remote Sensing Centre dates back to 1976, when the Government first made its intentions known during an Inter-Governmental meeting held in Addis Ababa, Ethiopia. </p>
                            <p>Before this pronouncement, several studies undertaken on behalf of the Government have indicated the need for such a centre to be centrally located.  One such study was carried out by the Food and Agricultural Organization (FAO).</p>
                        </article>
                    </div>
                    <Image src="/img/img-02.jpg" alt='image' className={styles.web_about_section_two_banner} width={100} height={100}/>
                </div>
            </section>
            <section className={styles.web_about_section_three}>
                <h1 className={styles.web_about_section_three_heading}>Core Values</h1>
                <div className={styles.web_about_section_three_cards}>
                    <div className={styles.web_about_section_three_card}>
                        <Image src="/img/img-03.png" alt='image' className={styles.web_about_section_three_card_img} width={100} height={100}/>
                        <p>Professionalism</p>
                    </div>

                    <div className={styles.web_about_section_three_card}>
                        <Image src="/img/img-04.png" alt='image' className={styles.web_about_section_three_card_img} width={100} height={100}/>
                        <p>Integrity</p>
                    </div>

                    <div className={styles.web_about_section_three_card}>
                        <Image src="/img/img-05.png" alt='image' className={styles.web_about_section_three_card_img} width={100} height={100}/>
                        <p>TeamWork</p>
                    </div>

                    <div className={styles.web_about_section_three_card}>
                        <Image src="/img/img-06.png" alt='image' className={styles.web_about_section_three_card_img} width={100} height={100}/>
                        <p>Excellence</p>
                    </div>
                </div>
            </section>
            <section className={styles.web_about_section_four}>

                <div className={styles.web_about_section_four_content_one}>
                    <h1>OUR VISION</h1>
                    <p>NCRS is committed to being a Centre of excellence in the provision of Geo-informatics
                    services for sustainable Development.</p>
                </div>

                <div className={styles.web_about_section_four_content_two}>
                    <h1>OUR MISSION</h1>
                    <p>Advancing knowledge through research and  applications of Remote Sensing, GIS and related  technologies for the identification, inventory, 
                    development and management of natural and  human resources.</p>
                </div>

            </section>
            <section className={styles.web_about_section_five}>
                <h1>Management Team</h1>

                <div className={styles.web_about_section_five_cards}>
                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                    <div className={styles.web_about_section_five_card}>
                        <Image src="/img/img-01.jpg" alt='image' className={styles.web_about_section_five_card_img} width={100} height={100}/>
                        <div className={styles.web_about_section_five_card_content}>
                            <h1>Barrack Obama</h1>
                            <p>Managing Director</p>
                            <Link className={styles.web_about_section_five_card_content_link} href="#">View Profile</Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}