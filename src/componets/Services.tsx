import styles from './style.module.css'

export default function Services(){
    return(
        <div className={styles.services}>
            <span className={styles.services_line}></span>
            <h1 className={styles.services_heading}>SERVICES</h1>
            <div className={styles.service}>
                <p>Satellite Data Services</p>
                <p>Forestry and Environment</p>
                <p>Natural Resource Mapping</p>
                <p>Urban and Rural Planning and Development</p>
                <p>Water Resources</p>
                <p>Disaster Management</p>
                <p>Cadastral Mapping</p>
                <p>Ecological & Climate Studies</p>
                <p>Consultancy</p>
                <p>Geo-Informatics</p>
            </div>
        </div>
    )
}