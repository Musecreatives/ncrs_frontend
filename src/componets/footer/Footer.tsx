import Link from "next/link"
import styles from './styles.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <h1 className={styles.footer_heading}>Subsidiaries</h1>
                <Link href="https://geosmart.ncrs.gov.ng/" target="blank" className={styles.footer_consultancy}>geosmart.ncrs.gov.ng</Link>
                <div className={styles.footer_section_one}>
                    <h1>Zonal Laboratories</h1>
                    <Link className={styles.footer_section_one_link} href="/laboratories/corporative-Information-network">COPINE</Link>
                    <Link className={styles.footer_section_one_link} href="/laboratories/avanced-space-technology-application-laboratory-uyo">Uyo</Link>
                    <Link className={styles.footer_section_one_link} href="/laboratories/zonal-advanced-space-technology-application-laboratory-kashere">Kashere</Link>
                    <Link className={styles.footer_section_one_link} href="/laboratories/zonal-advanced-space-technology-application-laboratory-kano">Kano</Link>
                    <Link className={styles.footer_section_one_link} href="/laboratories/zonal-advanced-space-technology-application-laboratory-abakiliki">Abakiliki</Link>
                    <Link className={styles.footer_section_one_link} href="/laboratories/zonal-advanced-space-technology-application-laboratory-langtang">Lantang</Link>
                </div>
                <div className={styles.footer_section_two}>
                    <h1>Quick Links</h1>
                    <Link href="/about" className={styles.footer_section_two_link}>About Us</Link>
                    <Link href="/services" className={styles.footer_section_two_link}>Services</Link>
                    <Link href="#" className={styles.footer_section_two_link}>Recent Programs</Link>
                    <Link href="/news" className={styles.footer_section_two_link}>News</Link>
                    <Link href="/contact" className={styles.footer_section_two_link}>Contact Us</Link>
                    <Link href="#" className={styles.footer_section_two_link}>GeoSmart Digital</Link>
                </div>
                <div className={styles.footer_section_three}>
                    <h1>Support</h1>
                    <p>Cookies Policy</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
                <div className={styles.footer_section_four}>
                    <h1>NCRS HQ</h1>
                    <p>Address:  Corporate Office: Rizek Village along Fobor Road, Jos East LGA
                    Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos</p>
                </div>
                <div className={styles.footer_section_five}>
                    <p>Ncrs: +2348088714963</p>
                    <p>Geosmart: +2348035998585</p>
                    <p>Email: info@NCRS.gov.ng</p>
                </div>
                <div className={styles.footer_circle_line}>
                    <div className={styles.footer_circle}></div>
                    <div className={styles.footer_line}></div>
                </div>
            </div>
            <div className={styles.footer_copyright}>
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
                        <Link href="https://geosmart.ncrs.gov.ng/" target="blank" className={styles.web_footer_subsidiaries_link}>geosmart.ncrs.gov.ng</Link>
                        <div className={styles.web_footer_subsidiaries_office}>
                            <h1>Zonal Laboratories</h1>
                            <Link className={styles.web_footer_subsidiaries_office_link} href="/laboratories/corporative-Information-network">COPINE</Link>
                            <Link className={styles.web_footer_subsidiaries_office_link}href="/laboratories/avanced-space-technology-application-laboratory-uyo">Uyo</Link>
                            <Link className={styles.web_footer_subsidiaries_office_link}href="/laboratories/zonal-advanced-space-technology-application-laboratory-kashere">Kashere</Link>
                            <Link className={styles.web_footer_subsidiaries_office_link}href="/laboratories/zonal-advanced-space-technology-application-laboratory-kano">Kano</Link>
                            <Link className={styles.web_footer_subsidiaries_office_link}href="/laboratories/zonal-advanced-space-technology-application-laboratory-abakiliki">Abakiliki</Link>
                            <Link className={styles.web_footer_subsidiaries_office_link}href="/laboratories/zonal-advanced-space-technology-application-laboratory-langtang">Lantang</Link>
                        </div>
                    </div>
                    <div className={styles.web_footer_links}>
                        <h1 className={styles.web_footer_links_heading}>Useful Links</h1>
                        <div>
                            <Link href="/about" className={styles.web_footer_links_link}>About Us</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Services</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Recent Programs</Link>
                            <Link href="#" className={styles.web_footer_links_link}>News</Link>
                            <Link href="#" className={styles.web_footer_links_link}>Contact Us</Link>
                            <Link href="https://geosmart.ncrs.gov.ng/" target="blank" className={styles.web_footer_links_link}>GeoSmart Digital</Link>
                        </div>
                    </div>
                    <div className={styles.web_footer_support}>
                        <h1 className={styles.web_footer_support_heading}>Support</h1>
                        <div className={styles.web_footer_support_section_one}>
                            <p>Cookies Policy</p>
                            <p>Privacy Policy</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div className={styles.web_footer_contacts}>
                        <h1 className={styles.web_footer_contacts_heading}>Contact Information</h1>
                        <div className={styles.web_footer_contacts_section_one}>
                            <p>Address: Corporate Office: Rizek Village along Fobor Road, Jos East LGA Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos</p>
                        </div>
                        <div className={styles.web_footer_contacts_section_two}>
                            <p>Email: info@NCRS.gov.ng</p>
                            <p>Ncrs: +2348088714963</p>
                            <p>Geosmart: +2348035998585</p>
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