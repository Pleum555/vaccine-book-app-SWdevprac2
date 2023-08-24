import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/Background.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannertext}>
                <h1>Vaccine Book App</h1>
                <h3>explore to vaccine book application</h3>
            </div>
        </div>
    )
}