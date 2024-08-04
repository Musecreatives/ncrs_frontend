import Link from "next/link"
import styles from './styles.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <h1 className={styles.footer_heading}>Subsidiaries</h1>
                <p className={styles.footer_consultancy}>consultancy.ncrs.gov.ng</p>
                <div className={styles.footer_section_one}>
                    <h1>Zonal Offices</h1>
                    <p>Port Harcourt</p>
                    <p>Gombe</p>
                    <p>Benin</p>
                    <p>Lagos</p>
                </div>
                <div className={styles.footer_section_two}>
                    <h1>Quick Links</h1>
                    <Link href="#" className={styles.footer_section_two_link}>About Us</Link>
                    <Link href="#" className={styles.footer_section_two_link}>Services</Link>
                    <Link href="#" className={styles.footer_section_two_link}>Recent Programs</Link>
                    <Link href="#" className={styles.footer_section_two_link}>News</Link>
                    <Link href="#" className={styles.footer_section_two_link}>Contact Us</Link>
                    <Link href="#" className={styles.footer_section_two_link}>Consultancy</Link>
                </div>
                <div className={styles.footer_section_three}>
                    <h1>Support</h1>
                    <p>Cookies Policy</p>
                    <p>Privacy Policy</p>
                    <p>ISMS Policy</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Sitemap</p>
                    <p>NPKI CRL</p>
                </div>
                <div className={styles.footer_section_four}>
                    <h1>NCRS HQ</h1>
                    <p>Address:  Corporate Office: Rizek Village along Fobor Road, Jos East LGA
                    Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos</p>
                </div>
                <div className={styles.footer_section_five}>
                    <p>Phone 1: +234 706 291 6261</p>
                    <p>Phone 2: +234 810 459 7908</p>
                    <p>Email: info@NCRS.gov.ng</p>
                </div>
                <div className={styles.web_footer_circle_line}>
                    <div className={styles.web_footer_circle}></div>
                    <div className={styles.web_footer_line}></div>
                </div>
            </div>
            <div className={styles.web_footer_copyright}>
                    <h1>© National Centre Remote Sensing <span>2024</span>. </h1>
                    <p>All Rights Reserved. Terms of Use and Privacy Policy</p>
            </div>
        </div>
    )
}

export function WebFooter(){
    return(
        <div className={styles.web_footer}>
            <div className={styles.web_footer_content_cover}>
                <div className={styles.web_footer_cover}>
                    <div className={styles.web_footer_subsidiaries}>
                        <h1>Subsidiaries</h1>
                        <Link href="#" className={styles.web_footer_subsidiaries_link}>geosmart.ncrs.gov.ng</Link>
                        <div className={styles.web_footer_subsidiaries_office}>
                            <h1>Zonal Offices</h1>
                                
                            <p>COPINE</p>
                            <p>Uyo</p>
                            <p>Kashere</p>
                            <p>Abakiliki</p>
                            <p>Lantang</p>
                        </div>
                    </div>
                    <div className={styles.web_footer_links}>
                        <h1 className={styles.web_footer_links_heading}>Useful Links</h1>
                        <div>
                            <Link href="#" className={styles.web_footer_links_link}>About Us</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Services</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Recent Programs</Link>
                            <Link href="#" className={styles.web_footer_links_link}>News</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Contact Us</Link>
                            <Link href="#" className={styles.web_footer_links_link}>GeoSmart Digital</Link>
                        </div>
                    </div>
                    <div className={styles.web_footer_support}>
                        <h1 className={styles.web_footer_support_heading}>Support</h1>
                        <div className={styles.web_footer_support_section_one}>
                            <p>Cookies Policy</p>
                            <p>Privacy Policy</p>
                            <p>ISMS Policy</p>
                            <p>FAQs</p>
                            <p>Contact Us</p>
                            <p>Sitemap</p>
                            <p>NPKI CRL</p>
                        </div>
                    </div>
                    <div className={styles.web_footer_contacts}>
                        <h1 className={styles.web_footer_contacts_heading}>Contact Information</h1>
                        <div className={styles.web_footer_contacts_section_one}>
                            <p>Address: Corporate Office: Rizek Village along Fobor Road, Jos East LGA Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos</p>
                        </div>
                        <div className={styles.web_footer_contacts_section_two}>
                            <p>Email: info@NCRS.gov.ng</p>
                            <p>Phone 1: +234 706 291 6261</p>
                            <p>Phone 2: +234 810 459 7908</p>
                        </div>
                    </div>
            </div>
            <div className={styles.web_footer_circle_line}>
                    <div className={styles.web_footer_circle}></div>
                    <div className={styles.web_footer_line}></div>
            </div>
        </div>
            <div className={styles.web_footer_copyright}>
                    <h1>© National Centre Remote Sensing <span>2024</span>. </h1>
                    <p>All Rights Reserved. Terms of Use and Privacy Policy</p>
            </div>
        </div>
    )
}