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
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>
        </main>
        <WebDepartment/>
        </>
    )
}

export function WebDepartment(){
    return(
        <main className={styles.web_department}>
            <section className={styles.web_department_hero}>
                <div className={styles.web_department_hero_layer}></div>
                <div className={styles.web_department_hero_content}>
                    <p>Home / <span>About NCRS</span></p>
                    <div className={styles.web_department_hero_content_sub}>
                        <p>Our divisions and functions</p>
                        <h1>Departments</h1>
                    </div>
                </div>
            </section>
           <section className={styles.web_department_section_two}>
                <div className={styles.web_department_section_two_contents}>
                    <div className={styles.web_department_section_two_contents_one}>
                        <h1>Department of Finance & Administration</h1>
                        <p>The department headed by a Deputy Director is subdivided into two sections, namely; General Administration and Finance Sections. The General Administration Section is further subdivided into units for efficient functioning. There are six Units headed by the Chief Administrative/Executive Officer who supervises the activities and staff in each of the units.</p>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <Image src="/img/img-07.jpg" alt="image" className={styles.web_department_section_two_contents_banner} width={100} height={100}/>
                </div>
           </section>

           <section className={styles.web_department_section_three}>
                <div className={styles.web_department_section_three_contents}>
                    <div className={styles.web_department_section_three_contents_one}>
                        <h1>Strategic Planning Department</h1>
                        <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                        <Link className={styles.web_department_section_three_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_three_link_icon}/>
                        </Link>
                    </div>
                    <Image src="/img/img-08.jpg" alt="image" className={styles.web_department_section_three_contents_banner} width={100} height={100}/>
                </div>
           </section>

           <section className={styles.web_department_section_two}>
                <div className={styles.web_department_section_two_contents}>
                    <div className={styles.web_department_section_two_contents_one}>
                        <h1>Department of Finance & Administration</h1>
                        <p>The department headed by a Deputy Director is subdivided into two sections, namely; General Administration and Finance Sections. The General Administration Section is further subdivided into units for efficient functioning. There are six Units headed by the Chief Administrative/Executive Officer who supervises the activities and staff in each of the units.</p>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <Image src="/img/img-07.jpg" alt="image" className={styles.web_department_section_two_contents_banner} width={100} height={100}/>
                </div>
           </section>
        </main>
    )
}