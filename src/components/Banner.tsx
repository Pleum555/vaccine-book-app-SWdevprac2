'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Banner({imgSrc, topic, desc}:{imgSrc:string[], topic:string, desc:string}){
    const imgnumber = imgSrc.length
    const [index, setIndex] = useState(0)
    const router = useRouter()

    return (
        <div className={styles.banner} onClick={()=>{setIndex((index+1)%imgnumber)}}>
            <Image src={imgSrc[index]}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannertext}>
                <h1 className='text-4xl font-medium'>{topic}</h1>
                <h3 className='text-xl font-serif'>{desc}</h3>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{router.push('/hospital')}}
            >
                Select Your Hospital NOW
            </button>
        </div>
    )
}