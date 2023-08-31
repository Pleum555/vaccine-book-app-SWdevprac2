import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner({imgSrc, topic, desc}:{imgSrc:string, topic:string, desc:string}){
    return (
        <div className={styles.banner}>
            <Image src={imgSrc}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannertext}>
                <h1 className='text-4xl font-medium'>{topic}</h1>
                <h3 className='text-xl font-serif'>{desc}</h3>
            </div>
        </div>
    )
}