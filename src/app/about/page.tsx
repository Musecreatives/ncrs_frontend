import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function about(){
    return(
        <>
        <main className={styles.about}>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <h1>About us</h1>
                    <p>Our Visions, Mission and Our Team</p>
                </div>
            </section>
            <section className={styles.section_two}>
                <h1>OUR MANDATE</h1>
                <article className={styles.section_two_article}>
                <p>The National Centre for Remote Sensing is charged with the following mandates:</p>
                <ul>
                    <li>To undertake pure and applied research, and development and to operate a Ground Receiving Station capable of receiving data from various satellite systems.</li>
                    <li>To undertake action-oriented research and development by applying RS/GIS technologies.</li>
                    <li>To undertake promotional activities such as Conferences, seminars, Workshops, production of Newsletters etc. on the practical applications of Remote Sensing.</li>
                    <li>Conduct training programmed for the benefit of resource planners, managers, decision-makers, researchers and the general public.</li>
                    <li>To promote and sponsor local development of inventory of natural resources (e.g. solid minerals, petroleum, forestry etc.) and provide data for environmental monitoring and management.</li>
                    <li>To encourage and assist public/private sector users to establish in-house Remote Sensing and GIS outfits, and render Consultancy and Extension Services to such outfits and other organizations.</li>
                </ul>
                </article>
            </section>
            <section className={styles.section_three}> 
                <h1>Background</h1>
                <p>The desire by Nigeria to establish its own comprehensive Remote Sensing Centre dates back to 1976, when the Government first made its intentions known during an Inter-Governmental meeting held in Addis Ababa, Ethiopia.  Before this pronouncement, several studies undertaken on behalf of the Government have indicated the need for such a centre to be centrally located.  One such study was carried out by the Food and Agricultural Organization (FAO). Thus, in 1998, following a decision by the National Council of Ministers, approval was given for a National Centre for Remote Sensing to be established, with its Permanent Headquarters in Jos, and a Satellite Ground Receiving Station at Kerang, near Panyam, Plateau State (site of the defunct Aerostat Balloon project Ref. CM (88) 63,8th Meeting conclusion 5 and CM (88) 175 Meeting of National Council of Ministers. In 1992, decree 33 established the National Agency for Science and Engineering Infrastructure (NASENI) as a replacement for the Federal Ministry of Science and Technology which became defunct the previous year. NASENI was charged with the responsibility of establishing the National Centre for Remote Sensing, among other mandates. Thus, the National Centre for Remote Sensing which formally took off in October 1995 now operates under the aegis of the National Space Research and Development Agency (NASRDA).</p>
            </section>
            <section className={styles.section_four}>
                <div className={styles.section_four_container}>
                    <div className={styles.section_four_card}>
                        <h1>OUR MISSION</h1>
                        <p>Advancing knowledge through research and  applications of Remote Sensing, GIS and related  technologies for the identification, inventory, 
                        development and management of natural and  human resources.</p>
                    </div>

                    <div className={styles.section_four_card}>
                        <h1>CORE VALUES</h1>
                        <ul className={styles.section_four_card_list}>
                            <li>Professionalism</li>
                            <li>Integrity</li>
                            <li>Teamwork</li>
                            <li>Excellence</li>
                        </ul>
                    </div>

                    <div className={styles.section_four_card}>
                        <h1>OUR VISION</h1>
                        <p>NCRS is committed to being a Centre of excellence in the provision of Geo-informatics
                        services for sustainable Development.</p>
                    </div>
                </div>
            </section>
            <section className={styles.section_five}>
                <h1>ORGANOGRAM</h1>
                <div className={styles.section_five_img_cover}>
                    <Image src="/img/organogram.png" alt='image' className={styles.section_five_img} width={100} height={100}/>
                </div>
            </section>
        </main>
        <WebAbout/>
        </>
    )
}

export function WebAbout(){
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